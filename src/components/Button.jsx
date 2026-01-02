import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Button({
  children,
  className,
  icon: Icon,
  type = "button",
  onClick,
  disabled,
  ...props
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}          // ✅ THIS WAS MISSING
      disabled={disabled}        // ✅ IMPORTANT
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={cn(
        "relative flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      {...props}                 // ✅ ALSO CRITICAL
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}
