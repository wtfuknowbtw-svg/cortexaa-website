import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Button({
  children,
  className,
  icon: Icon,
  variant = "primary", // primary, secondary, outline
  type = "button",
  href,
  onClick,
  disabled,
  ...props
}) {
  const variants = {
    primary: "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 border border-transparent",
    secondary: "bg-dark-200 text-white border border-white/10 hover:bg-dark-300 hover:border-white/20",
    outline: "bg-transparent text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/5",
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href } : { type };

  return (
    <Component
      {...linkProps}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={cn(
        "relative flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300",
        variants[variant] || variants.primary,
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}

      {/* Subtle Shine Effect for Primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      )}
    </Component>
  );
}

