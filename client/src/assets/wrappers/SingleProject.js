import styled from "styled-components";
const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height));
    padding: 3rem 0;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-500);
    margin-bottom: 2rem;
    font-weight: 500;
    transition: var(--transition);

    &:hover {
      color: var(--primary-700);
      transform: translateX(-5px);
    }
  }

  .project-header {
    margin-bottom: 3rem;

    h2 {
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .underline {
      width: 6rem;
      height: 0.25rem;
      background: var(--primary-500);
      margin-bottom: 1.5rem;
    }
  }

  .single-project {
    display: grid;
    gap: 3rem;
  }

  .project-image {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-2);

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .project-details {
    h4 {
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    p {
      color: var(--grey-600);
      line-height: 1.8;
    }
  }

  .project-description {
    margin-bottom: 2rem;
  }

  .technologies {
    margin-bottom: 2rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tech-item {
    background: var(--primary-100);
    color: var(--primary-700);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: var(--letter-spacing);
  }

  .project-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-github {
      background: #333;
      color: white;

      &:hover {
        background: #000;
      }
    }
  }

  .error-container {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem 0;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      color: var(--grey-600);
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 992px) {
    .single-project {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
`;

export default Wrapper;
