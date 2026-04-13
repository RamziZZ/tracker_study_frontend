import { classNames } from "./utils";

export function TextField({
  label,
  placeholder,
  value,
  onChange,
  icon: Icon,
  variant = "filled",
  suffix,
  className,
  ...rest
}) {
  const variantClasses = {
    filled:
      "bg-slate-900 text-white placeholder:text-slate-400 border border-slate-800 focus:border-blue-600 focus:ring-blue-600",
    outline:
      "bg-transparent text-white placeholder:text-slate-400 border border-slate-600 focus:border-blue-600 focus:ring-blue-600",
    light:
      "bg-slate-100 text-slate-900 placeholder:text-slate-500 border border-slate-200 focus:border-blue-500 focus:ring-blue-500",
  };

  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span> : null}
      <div className="relative">
        {Icon ? (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames(
            "w-full rounded-xl px-4 py-2 text-sm outline-none transition-colors",
            Icon ? "pl-10" : "",
            suffix ? "pr-10" : "",
            variantClasses[variant],
            className
          )}
          {...rest}
        />
        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}
