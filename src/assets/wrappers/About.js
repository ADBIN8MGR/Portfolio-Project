import styled from "styled-components";

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height) - 8rem);
    display: grid;
    align-items: center;
    padding: 3rem 0;
  }

  .container {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .about-center {
    display: grid;
    gap: 3rem;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    border: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    position: relative;
  }

  .profile-img:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .about-info {
    h2 {
      margin-bottom: 1.5rem;
      font-weight: 800;
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
      left: 0;
      border-radius: 2px;
    }

    h4 {
      margin-bottom: 0.5rem;
      margin-top: 2rem;
      color: var(--primary-color);
      font-weight: 700;
      font-size: 1.5rem;
    }

    h5 {
      margin-bottom: 1.5rem;
      color: var(--secondary-color);
      font-weight: 600;
      font-size: 1.2rem;
    }

    p {
      margin-bottom: 1.5rem;
      color: var(--text-color);
      line-height: 1.8;
      font-size: 1.1rem;
    }
  }

  .skills {
    margin-top: 2.5rem;
    background: var(--background-color);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    h4 {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: var(--text-color);
      position: relative;
      display: inline-block;
      margin-top: 0;
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

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .skill-tag {
    background: var(--light-color);
    color: var(--primary-color);
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

    &:hover {
      background: var(--primary-color);
      color: var(--light-color);
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 768px) {
    .about-center {
      gap: 4rem;
    }

    .about-info h2 {
      font-size: 3rem;
    }

    .skills {
      padding: 2.5rem;
    }
  }

  @media (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 2fr;
      align-items: start;
    }

    .profile-img {
      width: 350px;
      height: 350px;
    }

    .skills {
      margin-top: 3rem;
    }
  }
`;

export default Wrapper;
