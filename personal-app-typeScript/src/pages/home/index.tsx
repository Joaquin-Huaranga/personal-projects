import React from 'react';
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {

    return (
        <Container>
            <div className="first-section">
                <h1>Explora Nuevas Aventuras</h1>
                <img src="/assets/images/adventure.jpg" alt="Aventura" />
                <p>Embárcate en una aventura épica y descubre mundos fascinantes.</p>
            </div>
            <div className="second-section">
                <h1>Juega con Amigos</h1>
                <img src="/assets/images/multiplayer.jpg" alt="Multijugador" />
                <p>Diviértete con tus amigos en juegos multijugador llenos de acción.</p>
            </div>
            <div className="third-section">
                <h1>Desafíos Épicos</h1>
                <img src="/assets/images/challenges.jpg" alt="Desafíos" />
                <p>Supera los desafíos más difíciles y demuestra tu habilidad.</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0a3267;
    display: flex;
    position: relative;
    .first-section, .second-section, .third-section {
        overflow: hidden;
    }
    .first-section{
        color: white;
        position: absolute;
        width: 50%;
        height: 100vh;
        background-color: black;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .second-section{
        left: 50%;
        position: absolute;
        width: 50%;
        height: 50vh;
        background-color: red;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .third-section{
        left: 50%;
        top: 50%;
        position: absolute;
        width: 50%;
        height: 50vh;
        background-color: yellow;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    }

    p {
        font-size: 1.2rem;
        margin-top: 10px;
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
        .first-section{
            color: white;
            position: absolute;
            width: 100%;
            height: 33.3vh;
            background-color: black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        .second-section{
            top:33.3%;            
            position: absolute;
            width: 100%;
            height: 33.3vh;
            background-color: red;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        .third-section{
            top:66.7%;
            position: absolute;
            width: 100%;
            height: 33.3vh;
            background-color: yellow;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }

        h1 {
            font-size: 2rem;
        }

        img {
            height: 50%;
        }
    }
`;

export default Home;
