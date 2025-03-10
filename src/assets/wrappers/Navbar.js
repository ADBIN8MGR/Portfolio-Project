import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  background: var(--background-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: var(--transition);

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .nav-logo {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: var(--letter-spacing);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  .nav-logo span {
    background: linear-gradient(
      to right,
      var(--primary-color),
      var(--secondary-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .logo-img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.1rem;
    font-weight: 500;
    position: relative;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary-color);
    transition: var(--transition);
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .dark-mode-toggle {
    background: transparent;
    border: none;
    color: var(--primary-color);
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .dark-mode-toggle:hover {
    color: var(--secondary-color);
    transform: rotate(15deg);
  }

  .show-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6rem;
    left: 0;
    width: 100%;
    background: var(--background-color);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    gap: 1.5rem;
    z-index: 99;
  }

  @media (min-width: 768px) {
    .nav-toggle {
      display: none;
    }

    .nav-header {
      width: auto;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      column-gap: 2rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      column-gap: 2.5rem;
    }

    .nav-links a {
      text-transform: capitalize;
      color: var(--text-color);
      font-weight: 500;
      letter-spacing: var(--letter-spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }

    .dark-mode-toggle {
      display: flex;
    }
  }
`;

export default Wrapper;
