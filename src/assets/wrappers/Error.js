import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--nav-height));
  text-align: center;

  .error-container {
    max-width: 600px;
    padding: 2rem;
  }

  .error-icon {
    font-size: 5rem;
    color: var(--primary-500);
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 6rem;
    font-weight: 700;
    color: var(--primary-500);
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--grey-700);
  }

  p {
    color: var(--grey-600);
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
  }
`;

export default Wrapper;
