import { FC } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { theme } from "../theme";
import { Button } from "../components/Button";
import { IoArrowForwardCircleSharp } from "react-icons/io5";



export const Plans: FC = () => {
    return (
        <Main id="plans">
            <Title title="Planos disponíveis" color={theme.colors.white} />
            <Cards>
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title="VIA LÁCTEA"
                    text="Ideal para quem deseja aprimorar seus estudos, contando com um acompanhamento leve e focado para fortalecer sua autonomia."
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>1 aula por semana via meet</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <div>
                            <br />
                            <ul>
                                <li>Preço: R$ {theme.prices.viaLactea.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>Uma aula por semana de 50 minutos síncrona</li>
                            </ul>
                        </div>
                    }
                />
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title="VIA LÁCTEA"
                    text="Ideal para quem deseja aprimorar seus estudos, contando com um acompanhamento leve e focado para fortalecer sua autonomia."
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>1 aula por semana via meet</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <div>
                            <br />
                            <ul>
                                <li>Preço: R$ {theme.prices.viaLactea.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>Uma aula por semana de 50 minutos síncrona</li>
                            </ul>
                        </div>
                    }
                />
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title="VIA LÁCTEA"
                    text="Ideal para quem deseja aprimorar seus estudos, contando com um acompanhamento leve e focado para fortalecer sua autonomia."
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>1 aula por semana via meet</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <div>
                            <br />
                            <ul>
                                <li>Preço: R$ {theme.prices.viaLactea.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>Uma aula por semana de 50 minutos síncrona</li>
                            </ul>
                        </div>
                    }
                />
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title="VIA LÁCTEA"
                    text="Ideal para quem deseja aprimorar seus estudos, contando com um acompanhamento leve e focado para fortalecer sua autonomia."
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>1 aula por semana via meet</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <div>
                            <br />
                            <ul>
                                <li>Preço: R$ {theme.prices.viaLactea.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>Uma aula por semana de 50 minutos síncrona</li>
                            </ul>
                        </div>
                    }
                />
            </Cards>
            <Button text="Agendar Aula" link="https://calendar.app.google/dSLjW2YSMAfPSLuN6" />
        </Main>
    )
};

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    max-height: auto;
    padding: 20px 0;
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
`;

const Cards = styled.div`
  width: 100%;
  max-width: 900px; /* Limita a largura total para manter o formato 2x2 elegante em telas ultrawide */
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  display: grid;
  /* Cria 2 colunas no desktop e reduz automaticamente para 1 coluna quando a tela for menor que 300px */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px; /* Espaçamento uniforme entre as linhas e colunas */
  justify-items: center; /* Centraliza os cards em cada célula da grade */
  align-items: stretch; /* Garante que os cards fiquem com a mesma altura */

  @media (min-width: 768px) {
    /* Força exatamente 2 colunas a partir de tablets/desktops */
    grid-template-columns: repeat(2, 1fr);
  }
 

    .photo{
        width: 400px;
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
`;