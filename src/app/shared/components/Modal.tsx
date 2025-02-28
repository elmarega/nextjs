import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const ModalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<ModalProps>`
  background: white;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-20px)")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;