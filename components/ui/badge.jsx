import { classNames } from "./utils";

export function Badge({ children, variant = "primary", icon: Icon }) {
  const variantClasses = {
    primary:
      "bg-sky-100 text-slate-950 border border-sky-200 shadow-sm shadow-sky-200/40",
    dark: "bg-slate-900/60 text-slate-100 border border-slate-700",
    outline:
      "bg-transparent text-slate-200 border border-slate-500 hover:bg-white/5",
  };

  return (
    <span
      className={classNames(
        "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold",
        variantClasses[variant] || variantClasses.primary
      )}
    >
      {Icon ? <Icon className="h-4 w-4 text-slate-500" /> : null}
      {children}
    </span>
  );
}
