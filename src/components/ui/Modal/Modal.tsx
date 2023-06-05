import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  boxClassName?: string;
}

export const Modal = ({
  open,
  onClose,
  shouldCloseOnOverlayClick = true,
  boxClassName,
  children,
}: ModalProps) => {
  const ref = useRef(null);
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [onClose]);

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (shouldCloseOnOverlayClick && e.target === ref.current) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  const portalElement = document.getElementById("popups");
  if (portalElement === null) return null;

  const boxClasses = twMerge(
    "inline-block bg-emerald-50 rounded-lg text-left overflow-y-scroll overflow-x-hidden max-h-[95vh] shadow-xl transform transition-all animate-show-modal relative",
    boxClassName
  );

  return createPortal(
    <div
      ref={ref}
      onClick={handleOverlayClick}
      className="fixed z-10 inset-0 overflow-y-hidden bg-emerald-800/50 grid place-items-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className={boxClasses}>
        <button
          className="hover:scale-110 hover:rotate-12 transition-transform top-0 right-0 p-2 absolute"
          onClick={onClose}
        >
          <Icon icon="mdi:close" className="text-emerald-600 text text-3xl" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    portalElement
  );
};
