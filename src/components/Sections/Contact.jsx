import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import Button from "../ui/Button";
import { personalData } from "../../data/content";

const Contact = ({ onTriggerToast }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.contact.email);
      setCopiedEmail(true);
      if (onTriggerToast) {
        onTriggerToast("Email address copied to clipboard!", "success");
      }
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      if (onTriggerToast) {
        onTriggerToast("Failed to copy email.", "error");
      }
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // In case environment variables aren't configured yet, fallback gracefully
      setTimeout(() => {
        setIsSubmitting(false);
        setStatusMessage({
          type: "success",
          text: "Message simulation recorded! (Configure EmailJS keys in .env.local to route directly to inbox)",
        });
        reset();
        if (onTriggerToast) {
          onTriggerToast("Message received! Thank you.", "success");
        }
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          subject: data.subject || "Portfolio Contact Transmission",
          message: data.message,
        },
        publicKey
      );

      setStatusMessage({
        type: "success",
        text: "Transmission sent successfully! I will reply to you shortly.",
      });
      reset();
      if (onTriggerToast) {
        onTriggerToast("Message sent successfully!", "success");
      }
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatusMessage({
        type: "error",
        text: "Transmission could not be delivered. Please email me directly.",
      });
      if (onTriggerToast) {
        onTriggerToast("Failed to send message.", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-canvas relative overflow-hidden">
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              <Terminal className="w-4 h-4" /> Direct Communication
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink">
              Initiate transmission &{" "}
              <span className="font-editorial italic font-normal text-primary">
                collaborate.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted uppercase">
            SEC // 08 — TRANSMISSION
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Dossier & 1-Click Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-ink mb-2">
                  Let's Discuss Engineering
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  I am currently available for full-time Java/Backend roles and software
                  engineering internships. Reach out directly or dispatch a transmission.
                </p>
              </div>

              {/* 1-Click Copy Email Box */}
              <div className="p-4 rounded-2xl bg-canvas-subtle border border-border space-y-2">
                <div className="text-xs font-mono uppercase text-ink-faint font-semibold flex items-center justify-between">
                  <span>Direct Electronic Mail</span>
                  <span className="text-emerald-500 font-bold">Preferred</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-ink truncate font-medium">
                    {personalData.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl border border-border bg-surface hover:bg-surface-hover text-ink-muted hover:text-primary transition-colors cursor-pointer flex-shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Info Items */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-ink-muted">
                  <div className="w-8 h-8 rounded-lg bg-canvas-subtle border border-border flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-ink-faint">Base Location</div>
                    <div className="text-ink font-medium">{personalData.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-ink-muted">
                  <div className="w-8 h-8 rounded-lg bg-canvas-subtle border border-border flex items-center justify-center text-emerald-500 flex-shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-ink-faint">Current Availability</div>
                    <div className="text-ink font-medium">{personalData.availability}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-2xl bg-surface border border-border flex items-center justify-between">
              <span className="text-sm font-display text-ink-muted">
                Inspect code repositories
              </span>
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline"
              >
                <span>GitHub @Rahulsah33</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7 bg-surface border border-border rounded-3xl p-8 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-faint font-semibold"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Alex Rivera"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-xl bg-canvas-subtle border ${
                      errors.name ? "border-red-500" : "border-border"
                    } text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-faint font-semibold"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-canvas-subtle border ${
                      errors.email ? "border-red-500" : "border-border"
                    } text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-mono">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-ink-faint font-semibold"
                >
                  Subject / Role Inquiry
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Java Backend Engineer Position / Project Inquiry"
                  {...register("subject")}
                  className="w-full px-4 py-3 rounded-xl bg-canvas-subtle border border-border text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-ink-faint font-semibold"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Share details regarding your team, technology stack, or project..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-xl bg-canvas-subtle border ${
                    errors.message ? "border-red-500" : "border-border"
                  } text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-mono">{errors.message.message}</p>
                )}
              </div>

              {/* Status Notice */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-xs font-mono leading-relaxed border ${
                    statusMessage.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                      : "bg-red-500/10 border-red-500/20 text-red-500"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Dispatch Transmission</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
