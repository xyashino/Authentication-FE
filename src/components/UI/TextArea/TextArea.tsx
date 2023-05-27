import { HTMLAttributes, useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  description?: string;
  value?: string;
  name?: string;
}

export const TextArea = ({ description, className, ...rest }: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;
    const adjustHeight = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
    textarea.addEventListener("input", adjustHeight);
    adjustHeight();

    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, []);

  const textAreaClasses = twMerge(
    "appearance-none scroll border-2 focus:border-emerald-700 rounded w-full p-2 text-gray-600 focus:outline-none text-sm  transition-colors min-w-12",
    className
  );

  return (
    <label className="flex flex-wrap m-2 p-1  w-full">
      {!!description && (
        <span className="w-full text-start indent-2 font-semibold capitalize text-gray-600 m-0 p-0 text-sm">
          {description}
        </span>
      )}
      <textarea {...rest} ref={textAreaRef} className={textAreaClasses} />
    </label>
  );
};
