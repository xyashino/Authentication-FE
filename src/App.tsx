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

const routes = createBrowserRouter([
  {
    path: PageRoute.HOME,
    element: <AuthProvider />,
    children: [
      { path: PageRoute.PROFILE, element: <PersonalInfoPage /> },
      { path: PageRoute.PROFILE_EDIT, element: <EditAccountPage /> },
    ],
    errorElement: <ErrorElement />,
    loader: () => checkAuth(),
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
]);

export const App = () => (
  <Wrapper>
    <RouterProvider router={routes} />
  </Wrapper>
);
