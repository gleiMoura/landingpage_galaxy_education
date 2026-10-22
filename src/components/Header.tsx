import styled from "styled-components";
import { FC } from "react";
import { theme } from "../theme";



const Header: FC = () => {
    return (
        <HeaderMain>
            <img className="logo-placeholder" aria-hidden="true" src="/images/galaxy_logo.png" alt="Logo" />
            <div className="links">
                <a onClick={() => {
                    document.getElementById("presentation")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>Início</a>
                <a onClick={() => {
                    document.getElementById("recomendations")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>O que falam</a>
                <a onClick={() => {
                    document.getElementById("plans")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>planos</a>
            </div>
        </HeaderMain>
    )
};

const HeaderMain = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 40px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.173);
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.pageBackground};
    z-index: 111;

    .logo-placeholder {
        width: 52px;
        height: 52px;
        flex: 0 0 52px;
        border: 2px solid ${theme.colors.white};
        border-radius: 50%;
        box-sizing: border-box;
    }

    .links {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
    }

    .logo-placeholder + .mode {
        margin-left: 16px;
    }

    .mobile_links{
        width: 200px;
        height: 200px;
        padding: 30px;
        box-sizing: border-box;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        color: ${theme.colors.white};
        position: absolute;
        top: 80px;
    }

    a{
        color: ${theme.colors.white};
        font-weight: 500;
        font-size: 1.2rem;
        font-family: 'Raleway';
        cursor: pointer;
    }

    a:hover{
        color: #929191
    }

    .mode{
        width: 80px;
        height: 50px;
        background-color: white;
        color: white;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .invisible{
        display: none;
    }

    @media(max-width: 600px) {
        a{
            font-size: 1rem;
        }
        .links{
            display: none;
        }

        .invisible{
            display: flex;
        }
    }
`;

export default Header;