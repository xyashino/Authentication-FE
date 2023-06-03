import { twMerge } from "tailwind-merge";
import { Input } from "./Input.tsx";
import { InputProps } from "./input-props.ts";

interface Props extends InputProps {
  hasError: boolean;
  errorMessage: string;
}

export const ValidationInput = ({
  className = "",
  hasError,
  errorMessage,
  ...rest
}: Props) => {
  const errorClasses = "border-red-600 focus:border-red-600";
  const successClasses = "focus:border-emerald-600";

  const baseClasses = twMerge(
    hasError ? errorClasses : successClasses,
    className
  );

  return (
    <>
      <Input {...rest} className={baseClasses}>
        {hasError && (
          <p className="relative w-full text-center text-sm font-bold uppercase text-red-500">
            {errorMessage}
          </p>
        )}
      </Input>
    </>
  );
};
