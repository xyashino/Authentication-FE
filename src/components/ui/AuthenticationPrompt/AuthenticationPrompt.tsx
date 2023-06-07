import { Link } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

interface Props {
  question: string;
  linkText: string;
  linkTo: PageRoute;
}

export const AuthenticationPrompt = ({ linkText, linkTo, question }: Props) => {
  return (
    <p className="m-3 w-full pb-1 text-center font-mono text-sm font-bold uppercase text-emerald-50">
      {question}
      <Link
        to={linkTo}
        className="ml-1 cursor-pointer font-bold uppercase italic text-emerald-900 hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
};
