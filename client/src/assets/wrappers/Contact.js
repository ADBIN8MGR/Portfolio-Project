import styled from "styled-components";

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height) - 8rem);
    padding: 3rem 0;
  }

  .container {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-weight: 800;
      margin-bottom: 1rem;
      font-size: 2.5rem;
      color: var(--text-color);
      position: relative;
      display: inline-block;
    }

    h2::after {
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

    p {
      max-width: 700px;
      margin: 2rem auto 0;
      color: var(--text-color);
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }

  .contact-content {
    display: grid;
    gap: 3rem;
  }

  .contact-info {
    background: var(--background-color);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    h4 {
      margin-bottom: 1.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--text-color);
      position: relative;
      display: inline-block;
    }

    h4::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 3px;
      background: var(--primary-color);
      bottom: -8px;
      left: 0;
      border-radius: 2px;
    }
  }

  .contact-methods {
    display: grid;
    gap: 2rem;
  }

  .contact-method {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;

    .contact-icon {
      font-size: 1.75rem;
      color: var(--primary-color);
      min-width: 2.5rem;
      margin-top: 0.25rem;
    }

    h5 {
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--text-color);
      font-size: 1.1rem;
    }

    p {
      margin-bottom: 0;
      color: var(--text-color);
      font-size: 1rem;
    }
  }

  .contact-form-container {
    background: var(--background-color);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    h4 {
      margin-bottom: 1.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--text-color);
      position: relative;
      display: inline-block;
    }

    h4::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 3px;
      background: var(--primary-color);
      bottom: -8px;
      left: 0;
      border-radius: 2px;
    }
  }

  .form-row {
    display: grid;
    gap: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.75rem;

    label {
      display: block;
      margin-bottom: 0.75rem;
      font-weight: 600;
      color: var(--text-color);
      font-size: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.9rem 1.25rem;
      border-radius: 8px;
      background: var(--light-color);
      border: 1px solid transparent;
      color: var(--text-color);
      font-size: 1rem;
      transition: var(--transition);

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
      }
    }

    textarea {
      resize: vertical;
      min-height: 150px;
    }
  }

  .btn {
    padding: 0.9rem 1.75rem;
    background: var(--primary-color);
    color: var(--light-color);
    border-radius: 50px;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    text-align: center;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .btn:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }

    .contact-header h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: 992px) {
    .contact-content {
      grid-template-columns: 1fr 2fr;
      align-items: start;
      gap: 4rem;
    }

    .contact-header {
      margin-bottom: 5rem;
    }
  }
`;

export default Wrapper;
