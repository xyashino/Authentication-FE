import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

export const ProviderAuth = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.opener.postMessage(
      { event: "customEvent", data: pathname === PageRoute.PROVIDER_SUCCESS },
      []
    );
    window.close();
  }, []);
  return null;
};
