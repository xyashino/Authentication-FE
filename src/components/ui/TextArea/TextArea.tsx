import { HTMLAttributes, useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  description?: string;
  value?: string;
  name?: string;
  wrapperClassName?: string;
}

export const TextArea = ({
  description,
  className,
  wrapperClassName,
  ...rest
}: Props) => {
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
    "placeholder:font-bold placeholder:text-emerald-50/80 bg-transparent  appearance-none scroll border-emerald-50/50 border-2 focus:border-emerald-600 rounded-xl w-full px-4 py-2 text-gray-600 focus:outline-none text-sm  transition-colors min-w-12",
    className
  );

  const labelClasses = twMerge(
    "flex flex-wrap m-2 p-1  w-full",
    wrapperClassName
  );

  return (
    <label className={labelClasses}>
      {!!description && (
        <span className="w-full cursor-pointer pl-2 font-bold uppercase text-gray-600 text-md">
          {description}
        </span>
      )}
      <textarea {...rest} ref={textAreaRef} className={textAreaClasses} />
    </label>
  );
};
