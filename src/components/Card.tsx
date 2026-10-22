import { FC, ReactNode, useState } from "react";
import styled from "styled-components";

interface CardProps {
  title?: string;
  subtitle?: string;
  text?: string;
  image?: string;
  alt?: string;
  component?: ReactNode;
  color?: string;
  border?: string;
  siteLink?: string;
  githubLink?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  boxShadow?: string;
  margin?: string;
  minWidth?: string;
  minHeight?: string;
  button?: ReactNode;
  toggleFlex?: boolean;
  buttonText?: string;
  modalContent?: ReactNode;
}

const Card: FC<CardProps> = ({
  width,
  height,
  title,
  subtitle,
  text,
  image,
  alt,
  component,
  color,
  border,
  siteLink,
  boxShadow,
  margin,
  padding,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  button,
  toggleFlex,
  buttonText,
  modalContent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CardMain
        style={{
          backgroundColor: color,
          border: `2px solid ${border}`,
          width: width || "100%",
          height: height || "auto",
          boxShadow: boxShadow || "5px 5px 10px rgba(0, 0, 0, 0.5)",
          margin: margin || "10px",
          padding: padding || "24px 20px",
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          minWidth: minWidth,
          minHeight: minHeight,
          flexDirection: toggleFlex ? "row" : "column",
        }}
      >
        {title && <h1>{title}</h1>}
        {subtitle && <h3>{subtitle}</h3>}
        {text && <p>{text}</p>}
        {image && <img src={image} alt={alt} />}
        {component && component}
        {siteLink && <a href={siteLink}>Link para site</a>}
        {button && button}

        {buttonText && (
          <ActionButton onClick={() => setIsModalOpen(true)}>
            {buttonText}
          </ActionButton>
        )}
      </CardMain>

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <h2>{title}</h2>
            {modalContent ? modalContent : <p>Mais detalhes sobre este plano em breve.</p>}
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default Card;

const CardMain = styled.section`
  color: black;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid transparent;
  gap: 16px;

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.4;
    text-align: center;
    font-weight: 400;
    margin: 0;
  }

  img {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 320px;
  }
`;

const ActionButton = styled.button`
  background-color: #9333ea;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #7e22ce;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

const ModalContainer = styled.div`
  background-color: #ffffff;
  color: #1a1a1a;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 480px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  h2 {
    margin-top: 0;
    font-size: 1.3rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;