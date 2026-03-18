import { classNames } from "./utils";

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  children,
  className,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

  const sizeClasses = {
    xs: "px-3 py-1 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    primary: "bg-blue-700 text-white shadow-sm hover:bg-blue-600 active:bg-blue-700",
    outline:
      "border border-blue-700 text-blue-700 bg-white/10 hover:bg-blue-700/10",
    ghost: "text-slate-100 bg-transparent hover:bg-white/10",
    subtle: "bg-slate-800 text-slate-100 hover:bg-slate-700",
  };

  return (
    <button
      type="button"
      className={classNames(base, sizeClasses[size], variantClasses[variant], className)}
      {...rest}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}
