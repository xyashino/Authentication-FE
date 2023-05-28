import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, className, ...rest }: Props) => {
  const cardClasses = twMerge(
    "h-full min-w-1/2 max-w-3/4 bg-sky-50/40 my-3 rounded w-1/2 p-4 shadow ",
    className ?? ""
  );
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};
