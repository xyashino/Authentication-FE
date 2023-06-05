import { twMerge } from "tailwind-merge";
import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Button = ({ children, className, ...rest }: Props) => {
  const buttonClasses = twMerge(
    "select-none py-1 px-6 rounded-md text-center hover:scale-110 bg-emerald-700 transition-transform m-2 text-white font-bold shadow disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-emerald-700/50 ",
    className
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
