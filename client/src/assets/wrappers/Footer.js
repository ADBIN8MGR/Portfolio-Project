import styled from "styled-components";

const Wrapper = styled.footer`
  background: var(--background-color);
  padding: 2.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
  transition: var(--transition);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--primary-color),
      transparent
    );
    opacity: 0.3;
  }

  .footer-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-bottom: 1.75rem;
    column-gap: 2rem;
  }

  .social-icon {
    font-size: 1.75rem;
    color: var(--primary-color);
    transition: var(--transition);
    opacity: 0.8;
  }

  .social-icon:hover {
    color: var(--secondary-color);
    transform: translateY(-5px) scale(1.1);
    opacity: 1;
  }

  .copyright {
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--small-text);
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    padding: 3rem 0;

    .social-links {
      column-gap: 2.5rem;
    }

    .social-icon {
      font-size: 2rem;
    }

    .copyright {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
