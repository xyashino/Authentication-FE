import { Link } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

export const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative select-none">
        <h1 className="text-9xl font-bold text-emerald-50/50">404</h1>
        <p className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-2xl bg-emerald-600 px-4 text-center font-bold uppercase text-emerald-50 text-md">
          Page Not Found
        </p>
      </div>
      <Link
        to={PageRoute.HOME}
        className="m-4 rounded bg-emerald-800 px-6 py-2 font-bold uppercase text-emerald-50 transition-transform hover:scale-110 focus:scale-110"
      >
        Go Home
      </Link>
    </div>
  );
};
