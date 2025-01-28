import React from "react";
import styled from "styled-components";

export const HeaderLayout = () => {
  return (
    <Container>
        <div className="menu-section">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Empty</a></li>
                </ul>
            </nav>
        </div>
        <div className="message-wrapper">
            <h1>Descubre los juegos mas divertidos del 2025</h1>
        </div>
    </Container>
  );
};

const Container = styled.header`
    max-width: 100%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(1,3,5,0.4),rgba(1,3,5,0.4)),url("/assets/gif/backGroundGif.gif") center no-repeat fixed;
    background-size: 100% 100vh;
    .menu-section{
        color: white;
        width: 100%;
        height: auto;
        background: linear-gradient(rgba(1,3,5,0.4),rgba(1,3,5,0.4));
        margin-bottom: 1em;
        nav{
            ul{
                padding: 1em 0;
                display: flex;
                justify-content: space-around;
                list-style: none;
                li{
                    a{
                        color: gray;
                        text-decoration: none;
                        &:hover{
                            color: yellow;
                            text-decoration: underline dotted;
                        }
                    }
                }
            }
        }
    }
    .message-wrapper{
        width: 80%;
        margin: auto;
        color: lightblue;
        padding: 1em;
        text-align: center;
        font-size: 0.8em;
        border-radius: 15px;
        border: solid white 5px;
        transition: ease 0.3s;
        &:hover{
            transition: ease 0.3s;
            scale: 1.1;
            border: solid yellow 5px;
            color: yellow;
        }
    }
    @media (max-width: 425px){
        width: 100%;
        height: 100vh;
        background: linear-gradient(rgba(1,3,5,0.4),rgba(1,3,5,0.4)),url("/assets/gif/phoneBackground.gif") center no-repeat fixed;
        background-size: 100% 100vh;
        .menu-section{
            nav{
                ul{
                    text-align: center;
                    display: grid;
                    justify-content: center;
                    li{
                        padding: 0.2em 0;
                    }
                }
            }
        }
        .message-wrapper{
            margin: 0.3em 0 0 0;
            font-size: 0.5em;
            justify-self: center;
            width: 90%;
        }
    }
`;