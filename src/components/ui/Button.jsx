import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  disabled = false,
  type = "button",
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-display transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-primary-fg hover:bg-[var(--primary-hover)] shadow-sm hover:shadow",
    secondary:
      "bg-surface text-ink border border-border hover:bg-surface-hover hover:border-border-strong",
    outline:
      "bg-transparent border border-border text-ink hover:border-primary hover:text-primary",
    ghost:
      "bg-transparent text-ink-muted hover:text-ink hover:bg-surface-hover",
    blueprint:
      "bg-surface border border-primary/40 text-primary hover:bg-primary-subtle hover:border-primary",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
