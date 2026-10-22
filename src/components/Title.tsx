import { FC } from "react";
import styled from "styled-components";

interface TitleProps {
    title: string;
    color: string;
}
const Title: FC<TitleProps> = ({ title, color }) => {
    return (
        <TitleMain style={{ color }}>
            {title}
        </TitleMain>
    )
};

export default Title;

const TitleMain = styled.h1`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
`;
