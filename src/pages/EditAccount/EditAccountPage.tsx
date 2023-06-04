import { Header } from "@ui/Header/Header.tsx";
import { MainWrapper } from "@layout/MainWrapper.tsx";
import { Card } from "@layout/Card.tsx";
import { EditAccountForm } from "@components/forms/EditAccountForm.tsx";
import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

export const EditAccountPage = () => {
  const navigate = useNavigate();
  const handleClik = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <Header />
      <MainWrapper>
        <div className="w-1/2">
          <button
            className="self-start p-2 tranistion-all hover:font-bold"
            onClick={handleClik}
          >
            {"< Back"}
          </button>
        </div>
        <Card className="flex flex-col items-center">
          <div className="mb-2 w-full self-start border-b-2 border-emerald-50/50 p-2">
            <h2 className="text-3xl font-bold text-emerald-50">Change Info</h2>
            <p className="text-xl text-emerald-50">
              Changes will be reflected te every services
            </p>
          </div>
          <div className="flex items-center">
            <Avatar className="w-24" />
            <p className="font-bold text-emerald-50">CHANGE PHOTO</p>
          </div>
          <EditAccountForm />
        </Card>
      </MainWrapper>
    </>
  );
};
