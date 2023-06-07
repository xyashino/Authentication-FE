import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  secondElement: string | ReactNode;
}

export const PersonalInfoSection = ({ title, secondElement }: Props) => {
  return (
    <div className="mb-2 flex items-center justify-around border-b-2 border-emerald-900/10 py-4">
      <p className="text-lg uppercase text-emerald-50">{title}</p>
      <div className="w-1/2 break-words text-lg font-bold uppercase text-emerald-50 lg:w-1/3 lg:text-xl">
        {secondElement}
      </div>
    </div>
  );
};
