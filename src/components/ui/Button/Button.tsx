import { twMerge } from "tailwind-merge";
import { HTMLAttributes, PropsWithChildren, SyntheticEvent } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Button = ({ children, onClick, className, ...rest }: Props) => {
  const buttonClasses = twMerge(
    "select-none py-1 px-6 rounded-md text-center hover:scale-110 bg-emerald-700 transition-transform m-2 text-white font-bold shadow disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-emerald-700/50 ",
    className
  );

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick && onClick(e as any);
  };

  return (
    <button className={buttonClasses} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};
