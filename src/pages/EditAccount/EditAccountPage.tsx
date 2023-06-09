import { SyntheticEvent } from "react";
import { Card } from "@layout/Card.tsx";
import { EditAccountForm } from "@components/forms/EditAccountForm/EditAccountForm.tsx";
import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { UserResponse } from "@backendTypes";
import { Icon } from "@iconify/react";
import { Modal } from "@ui/Modal/Modal.tsx";
import { useModal } from "@hooks/useModal.tsx";
import { ChangeAvatar } from "@components/Modals/ChangeAvatar/ChangeAvatar.tsx";

export const EditAccountPage = () => {
  const { avatar } = useRouteLoaderData(PageRoute.HOME) as UserResponse;
  const navigate = useNavigate();
  const { isOpen, closeModal, openModal } = useModal();
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <div className="w-1/2">
        <button
          className="self-start p-2 tranistion-all hover:font-bold"
          onClick={handleClick}
        >
          {"< Back"}
        </button>
      </div>
      <Card className="flex flex-col items-center">
        <div className="mb-2 w-full self-start border-b-2 border-emerald-50/50 p-2">
          <h2 className="text-3xl font-bold text-emerald-50">Change Info</h2>
          <p className="text-xl text-emerald-50">
            Changes will be reflected on this service
          </p>
        </div>
        <button
          className="flex appearance-none items-center rounded px-8 py-2 transform-colors hover:bg-emerald-600/50"
          onClick={openModal}
        >
          <Avatar className="w-24" src={avatar ?? undefined}>
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-slate-600/50 text-5xl">
              <Icon
                icon="ic:round-add-a-photo"
                className="aspect-square text-emerald-50"
              />
            </div>
          </Avatar>
          <p className="ml-4 font-bold text-emerald-50">CHANGE PHOTO</p>
        </button>
        <EditAccountForm />
      </Card>
      <Modal
        open={isOpen}
        onClose={closeModal}
        boxClassName="w-11/12 lg:w-1/2 xl:w-1/3"
      >
        <ChangeAvatar />
      </Modal>
    </>
  );
};
