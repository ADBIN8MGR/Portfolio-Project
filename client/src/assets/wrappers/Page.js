import styled from "styled-components";

const Wrapper = styled.main`
  min-height: calc(100vh - 12rem); /* Subtract navbar and footer height */
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.3s ease-in-out;
  padding: 2rem 0;
  flex: 1;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.02), transparent);
    z-index: -1;
  }

  .section {
    padding: 2rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .section-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .section-center {
      width: 95vw;
    }
  }

  @media (min-width: 992px) {
    padding: 3rem 0;

    .section {
      padding: 3rem 0;
    }
  }
`;

export default Wrapper;
