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

  .projects-header {
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

  .projects-container {
    display: grid;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .projects-container {
      grid-template-columns: 1fr 1fr;
    }

    .projects-header h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: 992px) {
    .projects-container {
      grid-template-columns: repeat(3, 1fr);
    }

    .projects-header {
      margin-bottom: 5rem;
    }
  }
`;

export default Wrapper;
