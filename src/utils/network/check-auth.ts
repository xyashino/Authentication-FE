import { redirect } from "react-router-dom";
import { AxiosSetup } from "@utils/network/axios-setup.ts";
import { PageRoute } from "@enums/page-route.enum.ts";
import { Api } from "@enums/api.enum.ts";

export const checkAuth = async () => {
  try {
    return (await AxiosSetup.get(Api.AUTH)).data;
  } catch (e) {
    return redirect(PageRoute.LOGIN);
  }
};
