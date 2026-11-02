import { FC } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { theme } from "../theme";
import { Button } from "../components/Button";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export const Plans: FC = () => {
    const phoneNumber = "5521984866633";

    const getWhatsAppUrl = (planTitle: string, planPrice: number, planDetails: string) => {
        const message = `Gostei do plano ${planTitle}, como faço para fechar negócio? - informações do plano: Preço: R$ ${planPrice.toFixed(2)} | Detalhes: ${planDetails}`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <Main id="plans">
            <Title title="Planos disponíveis" color={theme.colors.white} />
            <Cards>
                {/* Via Láctea */}
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title={theme.prices.viaLactea.title}
                    text={theme.prices.viaLactea.description}
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>{theme.prices.viaLactea.shortDescription}</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <ModalBody>
                            <ul>
                                <li>Preço: R$ {theme.prices.viaLactea.price.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>{theme.prices.viaLactea.diferential}</li>
                                <li>{theme.prices.viaLactea.description}</li>
                            </ul>
                            <div className="modal-action">
                                <Button
                                    text="Gostei desse plano"
                                    link={getWhatsAppUrl(
                                        theme.prices.viaLactea.title,
                                        theme.prices.viaLactea.price,
                                        `${theme.prices.viaLactea.diferential} - ${theme.prices.viaLactea.description}`
                                    )}
                                />
                            </div>
                        </ModalBody>
                    }
                />

                {/* Galáxia */}
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title={theme.prices.galaxia.title}
                    text={theme.prices.galaxia.description}
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>{theme.prices.galaxia.shortDescription}</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <ModalBody>
                            <ul>
                                <li>Preço: R$ {theme.prices.galaxia.price.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>{theme.prices.galaxia.diferential}</li>
                                <li>{theme.prices.galaxia.description}</li>
                            </ul>
                            <div className="modal-action">
                                <Button
                                    text="Gostei desse plano"
                                    link={getWhatsAppUrl(
                                        theme.prices.galaxia.title,
                                        theme.prices.galaxia.price,
                                        `${theme.prices.galaxia.diferential} - ${theme.prices.galaxia.description}`
                                    )}
                                />
                            </div>
                        </ModalBody>
                    }
                />

                {/* Nebulosa */}
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title={theme.prices.nebulosa.title}
                    text="Ideal para quem deseja aprimorar seus estudos, contando com um acompanhamento leve e focado para fortalecer sua autonomia."
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>{theme.prices.nebulosa.shortDescription}</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <ModalBody>
                            <ul>
                                <li>Preço: R$ {theme.prices.nebulosa.price.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>{theme.prices.nebulosa.diferential}</li>
                                <li>{theme.prices.nebulosa.description}</li>
                            </ul>
                            <div className="modal-action">
                                <Button
                                    text="Gostei desse plano"
                                    link={getWhatsAppUrl(
                                        theme.prices.nebulosa.title,
                                        theme.prices.nebulosa.price,
                                        `${theme.prices.nebulosa.diferential} - ${theme.prices.nebulosa.description}`
                                    )}
                                />
                            </div>
                        </ModalBody>
                    }
                />

                {/* Cosmos */}
                <Card
                    color={theme.colors.cardBackground}
                    height="auto"
                    title={theme.prices.cosmos.title}
                    text="Ideal para quem deseja aprimorar seus estudos, contando com um acompanhamento leve e focado para fortalecer sua autonomia."
                    component={
                        <div className="diferential">
                            <IoArrowForwardCircleSharp className="diferential_icon" />
                            <p>{theme.prices.cosmos.shortDescription}</p>
                        </div>
                    }
                    buttonText="Saiba mais"
                    modalContent={
                        <ModalBody>
                            <ul>
                                <li>Preço: R$ {theme.prices.cosmos.price.toFixed(2)}</li>
                                <li>Acesso ao material de apoio</li>
                                <li>{theme.prices.cosmos.diferential}</li>
                                <li>{theme.prices.cosmos.description}</li>
                            </ul>
                            <div className="modal-action">
                                <Button
                                    text="Gostei desse plano"
                                    link={getWhatsAppUrl(
                                        theme.prices.cosmos.title,
                                        theme.prices.cosmos.price,
                                        `${theme.prices.cosmos.diferential} - ${theme.prices.cosmos.description}`
                                    )}
                                />
                            </div>
                        </ModalBody>
                    }
                />
            </Cards>
            <Button text="Agendar Aula" link="https://calendar.app.google/dSLjW2YSMAfPSLuN6" />
        </Main>
    );
};

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ul {
        margin: 0;
        margin-top: 15px;
        list-style-type: disc;
        list-style-position: inside;
        font-size: 0.9rem;
        line-height: 1.4;
    }

    li {
        margin-bottom: 8px;
    }

    .diferential {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .diferential_icon {
        color: ${theme.colors.purple};
        font-size: 1.2rem;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
    }

    .modal-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .modal-action {
        display: flex;
        justify-content: center;
        margin-top: 12px;
    }
`;

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
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    justify-items: center;
    align-items: stretch;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .photo {
        width: 400px;
    }

    .diferential_box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .diferential_icon {
        width: 48px;
        height: 34px;
        flex: 0 0 48px;
        font-size: 32px;
        color: ${theme.colors.pageBackground};
    }

    .diferential {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 14px;
        margin: 4px 0;
    }

    .diferential p {
        font-size: 0.9rem;
        font-weight: 600;
        text-align: left;
    }
`;