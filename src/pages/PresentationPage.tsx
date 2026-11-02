import { FC } from "react"
import { IoBookOutline, IoLaptopOutline, IoPeopleOutline } from "react-icons/io5";
import { theme } from "../theme";
import styled from "styled-components";
import Card from "../components/Card";
import { Button } from "../components/Button";

export const Presentation: FC = () => {
    const phoneNumber = "5521984866633";
    const message = "Olá! Gostaria de saber mais sobre as aulas";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Main id="presentation">
            <div className="cards">
                <Card
                    width="45%"
                    maxWidth="500px"
                    minHeight="300px"
                    height="204px"
                    color="#e7e3f2"
                    border="transparent"
                    boxShadow="none"
                    padding="20px"
                    title="O que é a Galaxy?"
                    text="A Galaxy é uma empresa de aulas particulares focada em ajudar seu filho em exatas.
                                    Aqui você irá encontrar mentorias em Matemática, física, química e programação.
                              
                                    Na Galaxy buscamos excelência acadêmica e por isso possuímos uma metodologia única
                                    que reúne o melhor da tecnologia para auxiliar seu filho a melhorar os resultados no
                                    ambiente acadêmico, visando sempre seus objetivos."

                />
                <Card
                    width="45%"
                    maxWidth="500px"
                    height="204px"
                    color="#e7e3f2"
                    border="transparent"
                    boxShadow="none"
                    padding="20px"
                    minHeight="300px"
                    title="Diferenciais"
                    component={
                        <Component>
                            <div className="diferential_box">
                                <div className="diferential">
                                    <IoPeopleOutline className="diferential_icon" />
                                    <p>Foco total no aluno</p>
                                </div>
                                <div className="diferential">
                                    <IoLaptopOutline className="diferential_icon" />
                                    <p>Aulas ao vivo</p>
                                </div>
                                <div className="diferential">
                                    <IoBookOutline className="diferential_icon" />
                                    <p>Listas de exercício</p>
                                </div>
                            </div>
                        </Component>
                    }
                />
            </div>
            <Button text="Entrar em contato" link={whatsappURL} />
        </Main>
    )
};

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    padding: 100px 0 24px;
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.pageBackground};

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background-image: url("/images/fundo_site_um.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.44;
    }

    .cards {
        width: min(94%, 1000px);
        margin: 0 auto;
        padding: 24px 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 100px;
        box-sizing: border-box;

        > section {
            width: calc(50% - 12px) !important;
            max-width: none !important;
            margin: 0 !important;
            border-radius: 20px;
        }

        @media(max-width: 800px) {
            flex-direction: column;
            align-items: stretch;

            > section {
                width: 100% !important;
                height: auto !important;
                min-height: 0 !important;
            }
        }
   }
`;

const Component = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .info_box{
        width: 100%;
    };

    h1{
        font-size: 1.4rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 8px;
    }

    p{
        font-size: 0.78rem;
        line-height: 1.3;
        text-align: justify;
        font-weight: 400;
    }

    .diferential_box{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .diferential_icon{
        width: 48px;
        height: 34px;
        flex: 0 0 48px;
        font-size: 32px;
        color: ${theme.colors.pageBackground};
    }

    .diferential{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 14px;
        margin: 4px 0;
    }

    .diferential p{
        font-size: 0.9rem;
        font-weight: 600;
        text-align: left;
    }

    @media(max-width: 600px){
        .info_box {
            width: 100%;
        }

        h1{
            font-size: 1.2rem;
        }

        p {
            font-size: 0.72rem;
        }

        .diferential p {
            font-size: 0.85rem;
        }
    }
`;
