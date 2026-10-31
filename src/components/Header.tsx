import styled from "styled-components";
import { FC, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { theme } from "../theme";



const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderMain>
            <img className="logo-placeholder" aria-hidden="true" src="/images/galaxy_logo.png" alt="Logo" />
            <nav
                id="main-navigation"
                className={isMenuOpen ? "links is-open" : "links"}
                aria-label="Navegação principal"
            >
                <a href="#presentation" onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById("presentation")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>Início</a>
                <a href="#recomendations" onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById("recomendations")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>O que falam</a>
                <a href="#plans" onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById("plans")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>planos</a>
            </nav>
            <button
                className="menu-toggle"
                type="button"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
                {isMenuOpen ? <IoClose aria-hidden="true" /> : <IoMenu aria-hidden="true" />}
            </button>
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

    .menu-toggle {
        display: none;
        color: ${theme.colors.white};
        border: 0;
        padding: 8px;
        background: transparent;
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media(max-width: 600px) {
        padding: 0 16px;

        a{
            font-size: 1rem;
        }

        .links{
            display: none;
            position: absolute;
            top: 80px;
            right: 12px;
            width: min(240px, calc(100vw - 24px));
            padding: 20px;
            box-sizing: border-box;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            border-radius: 0 0 12px 12px;
            background-color: ${theme.colors.pageBackground};
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .links.is-open {
            display: flex;
        }

        .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export default Header;