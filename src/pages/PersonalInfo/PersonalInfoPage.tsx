import { PersonalInfoSection } from "@ui/PersonalInfoSection/PersonalSection.tsx";
import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { Card } from "@layout/Card.tsx";
import { Link, useRouteLoaderData } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { UserResponse } from "@backendTypes";

export const PersonalInfoPage = () => {
  const user = useRouteLoaderData(PageRoute.HOME) as UserResponse;
  return (
    <>
      <h1 className="m-2 text-4xl font-bold text-emerald-100">Personal Info</h1>
      <p className="text-xl text-emerald-100">
        basic info , like your name and photo.
      </p>
      <Card>
        <div className="mb-2 flex grow items-center justify-between border-b-2 border-emerald-900/10">
          <div>
            <h2 className="text-3xl font-black text-emerald-50">Profile</h2>
            <p className="mb-4 text-lg text-emerald-50">
              Some info may be visible to other people
            </p>
          </div>
          <Link
            className="px-10 py-3 uppercase bg-emerald-700 font-bold rounded shadow text-emerald-50 hover:scale-110 transition-transform"
            to={PageRoute.PROFILE_EDIT}
          >
            Edytuj
          </Link>
        </div>

        <PersonalInfoSection
          title="Photo"
          secondElement={
            <Avatar className="w-16" src={user.avatar ?? undefined} />
          }
        />
        <PersonalInfoSection title="Name" secondElement={user.fullName} />
        <PersonalInfoSection title="Bio" secondElement="Testowe bio" />
        <PersonalInfoSection
          title="Phone"
          secondElement={user.phone ?? "NONE"}
        />
        <PersonalInfoSection title="Email" secondElement={user.email} />
        <PersonalInfoSection title="Passwrod" secondElement="**********" />
      </Card>
    </>
  );
};
