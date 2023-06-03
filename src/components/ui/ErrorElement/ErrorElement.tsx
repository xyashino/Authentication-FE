import { Link, useRouteError } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

export const ErrorElement = () => {
  const error = useRouteError() as Error;
  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <div className="relative select-none">
        <h1 className="text-7xl lg:text-9xl font-bold text-emerald-50/50 uppercase">
          Error
        </h1>
        <p className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-2xl bg-emerald-600 px-4 text-center font-bold uppercase text-emerald-50 text-md">
          Try again later
        </p>
      </div>

      <div className="p-4 m-2 bg-emerald-50/50 rounded shadow max-w-screen-sm lg:max-w-screen-lg break-words ">
        <p>
          <span className="font-bold text-red-700 uppercase">Message:</span>{" "}
          {error.message ?? "Unknown Message"}
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
