import React from "react";
import styled from "styled-components";

export const FooterLayout = () => {
  return (
      <Container>
        <div className="footer-content">
          <section>
            <h3>Sobre Nosotros</h3>
            <p>
              Bienvenidos a la mejor app de juegos del 2025. Descubre los
              desafios, juega con amigos y alcanza el siguiente nivel.
            </p>
          </section>
          <section>
            <h3>Enlaces Rapidos</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </section>
          <section>
            <h3>Siguenos</h3>
            <div className="social-icons">
              <a href="#" title="Facebook">🌐</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="Instagram">📸</a>
              <a href="#" title="YouTube">📺</a>
            </div>
          </section>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Game Web App. Todos los derechos reservados.</p>
        </div>
      </Container>
  );
};

const Container = styled.footer`
  background-color: #1e1e1e;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  
  .footer-content{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #f39c12;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
      color: #b0b0b0;
    }

    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 0.5rem;
        a {
          color: #f39c12;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #e67e22;
          }
        }
      }
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;

      a {
        color: #fff;
        font-size: 1.5rem;
        text-decoration: none;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2);
          color: #e67e22;
        }
      }
    }
  }
  .footer-bottom{
    border-top: 1px solid #333;
    margin-top: 2rem;
    padding-top: 1rem;
    p {
      font-size: 0.8rem;
      color: #777;
    }
  }
`;

