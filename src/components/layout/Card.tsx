import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, className, ...rest }: Props) => {
  const cardClasses = twMerge(
    "h-full w-11/12 lg:w-1/2 bg-emerald-50/20 my-3 rounded  p-4 rounded-xl shadow-2xl",
    className ?? ""
  );
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};
