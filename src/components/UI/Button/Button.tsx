import { twMerge } from "tailwind-merge";
import { HTMLAttributes, PropsWithChildren, SyntheticEvent } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, onClick, className, ...rest }: Props) => {
  const buttonClasses = twMerge(
    "py-1 px-6 rounded-md text-center hover:scale-110 bg-emerald-700 transition-transform m-2 text-white font-bold",
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
