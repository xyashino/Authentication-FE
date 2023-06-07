import { Link, useRouteError } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

export const ErrorElement = () => {
  const error = useRouteError() as Error;
  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <div className="relative select-none">
        <h1 className="text-7xl font-bold uppercase text-emerald-50/50 lg:text-9xl">
          Error
        </h1>
        <p className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-2xl bg-emerald-600 px-4 text-center font-bold uppercase text-emerald-50 text-md">
          Try again later
        </p>
      </div>

      <div className="m-2 max-w-screen-sm break-words rounded bg-emerald-50/50 p-4 shadow lg:max-w-screen-lg">
        <p>
          <span className="font-bold uppercase text-red-700">Message:</span>{" "}
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
