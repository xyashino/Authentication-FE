import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  secondElement: string | ReactNode;
}

export const PersonalInfoSection = ({ title, secondElement }: Props) => {
  return (
    <div className="flex justify-around items-center py-4 mb-2 border-b-2 border-emerald-900/10">
      <p className="text-lg  uppercase text-emerald-50">{title}</p>
      <p className="text-xl font-bold uppercase text-emerald-50 w-1/3">
        {secondElement}
      </p>
    </div>
  );
};
