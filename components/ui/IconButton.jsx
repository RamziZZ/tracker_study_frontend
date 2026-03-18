import { classNames } from "./utils";

export function IconButton({ icon: Icon, label, className, ...rest }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={classNames(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-slate-900 shadow-sm transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
        className
      )}
      {...rest}
    >
      {Icon ? <Icon className="h-6 w-6" /> : null}
    </button>
  );
}
