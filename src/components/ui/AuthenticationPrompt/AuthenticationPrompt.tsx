import { Link } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

interface Props {
  question: string;
  linkText: string;
  linkTo: PageRoute;
}

export const AuthenticationPrompt = ({ linkText, linkTo, question }: Props) => {
  return (
    <p className="m-3 w-full pb-1 text-center text-sm font-bold text-emerald-50 uppercase font-mono">
      {question}
      <Link
        to={linkTo}
        className="ml-1 cursor-pointer font-bold uppercase text-emerald-900 hover:underline italic"
      >
        {linkText}
      </Link>
    </p>
  );
};
