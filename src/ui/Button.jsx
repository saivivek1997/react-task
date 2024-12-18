import { cn } from "../lib/utils";

function Button({ className, children }) {
  return (
    <button
      className={cn(
        "shadow-custom-shadow rounded-lg  p-1 px-3 max-h-8",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
