import styled from "styled-components";

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height) - 8rem);
    display: grid;
    align-items: center;
    padding: 2rem 0;
  }

  .container {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .info {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;
    display: inline-block;

    span {
      background: linear-gradient(
        to right,
        var(--primary-color),
        var(--secondary-color)
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
    }

    &::after {
      content: "";
      position: absolute;
      width: 60px;
      height: 4px;
      background: var(--primary-color);
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }

  p {
    color: var(--text-color);
    line-height: 1.8;
    font-size: 1.1rem;
    max-width: 35em;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .main-img {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    object-fit: contain;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .btn-container {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }

  .btn {
    padding: 0.75rem 1.75rem;
    border-radius: 50px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    transition: var(--transition);
    border: none;
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .btn-hero {
    background: var(--primary-color);
    color: var(--light-color);
  }

  .btn-hero:hover {
    background: var(--secondary-color);
    color: var(--light-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  .btn-hipster {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
  }

  .btn-hipster:hover {
    background: var(--primary-color);
    color: var(--light-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      align-items: center;
    }

    .info {
      text-align: left;
      margin-bottom: 0;
    }

    p {
      margin: 0;
      margin-bottom: 1.5rem;
      margin-top: 2rem;
    }

    .btn-container {
      justify-content: flex-start;
    }

    h1 {
      font-size: 3.5rem;
    }

    h1::after {
      left: 0;
      transform: none;
    }
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export default Wrapper;
