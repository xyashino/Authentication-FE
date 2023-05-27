import { HTMLAttributes, PropsWithChildren } from "react";

type InputType = "email" | "password" | "number" | "text" | "tel" | "url";

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "type">,
    PropsWithChildren {
  type?: InputType;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  icon: string;
}
