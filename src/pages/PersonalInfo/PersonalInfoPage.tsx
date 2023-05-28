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
        <h1 className="text-4xl m-2 font-bold text-emerald-100">
          Personal Info
        </h1>
        <p className="text-xl text-emerald-100">
          basic info , like your name and photo.
        </p>
        <Card>
          <div className="mb-2 border-b-2 border-emerald-900/10 grow flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-black text-emerald-50">Profile</h2>
              <p className="text-lg  text-emerald-50 mb-4">
                Some info may be visible to other people
              </p>
            </div>
            <Button className="py-3 px-10 uppercase">Edytuj</Button>
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
