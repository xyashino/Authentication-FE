import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLImageElement>, PropsWithChildren {
  src?: string | null;
}

export const Avatar = ({ src, children, className, ...rest }: Props) => {
  const imageClasses = twMerge("aspect-square w-8  rounded", className ?? "");

  return (
    <div className="relative">
      <img
        src={
          src ||
          "https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png"
        }
        alt="avatar"
        className={imageClasses}
        draggable={false}
        {...rest}
      />
      {children}
    </div>
  );
};
