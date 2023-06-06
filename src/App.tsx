import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wrapper } from "@layout/Wrapper/Wrapper.tsx";
import { PageRoute } from "@enums/page-route.enum.ts";
import { LoginPage } from "@pages/Login/LoginPage.tsx";
import { RegistrationPage } from "@pages/Registration/RegistrationPage.tsx";
import { PersonalInfoPage } from "@pages/PersonalInfo/PersonalInfoPage.tsx";
import { EditAccountPage } from "@pages/EditAccount/EditAccountPage.tsx";
import { NotFoundPage } from "@pages/NotFoundPage.tsx";
import { ErrorElement } from "@ui/ErrorElement/ErrorElement.tsx";
import { checkAuth } from "@utils/network/check-auth.ts";
import { AuthProvider } from "@components/AuthProvider/AuthProvider.tsx";
import { Toaster } from "react-hot-toast";
import { ProviderAuth } from "@pages/ProviderAuth.tsx";

const routes = createBrowserRouter([
  {
    path: PageRoute.HOME,
    element: <AuthProvider />,
    id: PageRoute.HOME,
    children: [
      { path: PageRoute.PROFILE, element: <PersonalInfoPage /> },
      { path: PageRoute.PROFILE_EDIT, element: <EditAccountPage /> },
    ],
    errorElement: <ErrorElement />,
    loader: checkAuth,
  },
  {
    path: PageRoute.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorElement />,
  },
  {
    path: PageRoute.REGISTER,
    element: <RegistrationPage />,
    errorElement: <ErrorElement />,
  },
  {
    path: PageRoute.EVERYTHING,
    element: <NotFoundPage />,
    errorElement: <ErrorElement />,
  },
  {
    path: PageRoute.PROVIDER_SUCCESS,
    element: <ProviderAuth />,
  },
  {
    path: PageRoute.PROVIDER_FAILURE,
    element: <ProviderAuth />,
  },
]);

export const App = () => (
  <Wrapper>
    <RouterProvider router={routes} />
    <Toaster position="bottom-right" />
  </Wrapper>
);
