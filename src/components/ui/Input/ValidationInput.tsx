import { twMerge } from "tailwind-merge";
import { Input } from "./Input.tsx";
import { InputProps } from "./input-props.ts";

interface Props extends InputProps {
  error: string | null;
}

export const ValidationInput = ({ className = "", error, ...rest }: Props) => {
  const errorClasses = "border-red-600 focus:border-red-600";
  const successClasses = "focus:border-emerald-600";

  const baseClasses = twMerge(error ? errorClasses : successClasses, className);

  return (
    <>
      <Input {...rest} className={baseClasses}>
        {!!error && (
          <p className="relative w-full text-center text-sm  uppercase text-red-500 font-mono font-semibold animate-show-text">
            {error}
          </p>
        )}
      </Input>
    </>
  );
};
