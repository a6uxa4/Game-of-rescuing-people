import styled from "styled-components";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  type: string;
}

export const Modal = ({ onClose, type }: ModalProps) => {
  const modalOverlay = document.getElementById("modal")!;
  const modalBackdrop = document.getElementById("backdrop")!;

  let content;
  switch (type) {
    case "pause":
      content = <div>Pause</div>;
      break;
    case "great":
      content = <div>great</div>;
      break;
    case "good":
      content = <div>good</div>;
      break;
    case "satisfaction":
      content = <div>satisfaction</div>;
      break;
    default:
      return null;
  }

  return (
    <>
      {createPortal(<StyledBackdrop onClick={onClose} />, modalBackdrop)}
      {createPortal(
        <StyledModalContent>{content}</StyledModalContent>,
        modalOverlay
      )}
    </>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
`;

const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  width: 40rem;
  left: calc(50% - 20rem);

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
