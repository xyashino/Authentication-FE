import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { PageRoute } from "@enums/page-route.enum.ts";
import { BaseAuth } from "@layout/BaseAuth.tsx";
import { UserResponse } from "@backendTypes";

export const AuthProvider = () => {
  const data = useLoaderData() as UserResponse;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== PageRoute.HOME) return;
    return navigate(PageRoute.PROFILE);
  }, [navigate, pathname]);

  return (
    <BaseAuth>
      <Outlet context={data} />;
    </BaseAuth>
  );
};
