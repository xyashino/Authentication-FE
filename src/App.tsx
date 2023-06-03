import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Wrapper } from "@layout/Wrapper/Wrapper.tsx";
import { PageRoute } from "@enums/page-route.enum.ts";
import { LoginPage } from "@pages/Login/LoginPage.tsx";
import { RegistrationPage } from "@pages/Registration/RegistrationPage.tsx";
import { PersonalInfoPage } from "@pages/PersonalInfo/PersonalInfoPage.tsx";
import { EditAccountPage } from "@pages/EditAccount/EditAccountPage.tsx";
import { NotFoundPage } from "@pages/NotFoundPage.tsx";

const routes = createBrowserRouter([
  {
    path: PageRoute.HOME,
    children: [
      { path: PageRoute.PROFILE, element: <PersonalInfoPage /> },
      { path: PageRoute.PROFILE_EDIT, element: <EditAccountPage /> },
    ],
  },
  {
    path: PageRoute.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PageRoute.REGISTER,
    element: <RegistrationPage />,
  },
  {
    path: PageRoute.EVERYTHING,
    element: <NotFoundPage />,
  },
]);

export const App = () => (
  <Wrapper>
    <RouterProvider router={routes} />
  </Wrapper>
);
