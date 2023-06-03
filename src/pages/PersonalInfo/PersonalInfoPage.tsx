import { Header } from "@ui/Header/Header.tsx";
import { MainWrapper } from "@layout/MainWrapper.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { PersonalInfoSection } from "@ui/PersonalInfoSection/PersonalSection.tsx";
import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { Card } from "@layout/Card.tsx";

export const PersonalInfoPage = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <h1 className="m-2 text-4xl font-bold text-emerald-100">
          Personal Info
        </h1>
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
            <Button className="px-10 py-3 uppercase">Edytuj</Button>
          </div>

          <PersonalInfoSection
            title="Photo"
            secondElement={<Avatar className="w-16" />}
          />
          <PersonalInfoSection title="Name" secondElement="Testowe Imie" />
          <PersonalInfoSection title="Bio" secondElement="Testowe bio" />
          <PersonalInfoSection title="Phone" secondElement="123-123-123" />
          <PersonalInfoSection title="Email" secondElement="test@waa.ts" />
          <PersonalInfoSection title="Passwrod" secondElement="**********" />
        </Card>
      </MainWrapper>
    </>
  );
};
