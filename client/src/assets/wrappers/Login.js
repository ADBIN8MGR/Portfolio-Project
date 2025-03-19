import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #1a1c1f 0%, #2d3436 100%);
  padding: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 15% 50%,
        rgba(17, 24, 39, 0.37) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 85% 30%,
        rgba(17, 24, 39, 0.37) 0%,
        transparent 25%
      );
  }

  .form {
    max-width: 450px;
    width: 100%;
    background: rgba(30, 32, 34, 0.95);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
      0 2px 4px rgba(255, 255, 255, 0.05),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    padding: 2.5rem;
    margin: 2rem auto;
    transition: all 0.4s ease;
    position: relative;
    backdrop-filter: blur(10px);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
        0 2px 4px rgba(255, 255, 255, 0.05),
        inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    }

    h4 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.8rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 1rem;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 2px;
        background: rgba(255, 255, 255, 0.2);
      }
    }

    p {
      margin-top: 1.5rem;
      text-align: center;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.95rem;
    }

    .member-btn {
      margin-left: 0.5rem;
      color: #60a5fa;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        color: #93c5fd;
        text-shadow: 0 0 8px rgba(96, 165, 250, 0.3);
      }
    }
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
    width: 50px;
    filter: brightness(0.9) contrast(1.2);
    opacity: 0.9;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      opacity: 1;
      filter: brightness(1) contrast(1.2);
    }
  }

  .form-row {
    margin-bottom: 1.8rem;
    position: relative;
  }

  .form-label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border-radius: 8px;
    background: rgba(17, 24, 39, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
      outline: none;
      border-color: rgba(96, 165, 250, 0.5);
      background: rgba(17, 24, 39, 0.6);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }
  }

  .btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transition: 0.5s;
    }

    &:hover {
      background: linear-gradient(90deg, #1d4ed8 0%, #1e40af 100%);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.1);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(1px);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    .form {
      padding: 2rem;
    }

    h4 {
      font-size: 1.6rem;
    }
  }
`;

export default Wrapper;
