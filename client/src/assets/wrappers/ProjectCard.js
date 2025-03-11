import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--background-color);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }

  .project-img-container {
    height: 220px;
    overflow: hidden;
    position: relative;
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  &:hover .project-img {
    transform: scale(1.1);
  }

  .project-info {
    padding: 1.75rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: var(--background-color);
    position: relative;
    z-index: 1;
  }

  .project-info h4 {
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--text-color);
    font-size: 1.35rem;
    position: relative;
    display: inline-block;
  }

  .project-info h4::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
    bottom: -8px;
    left: 0;
    border-radius: 2px;
  }

  .project-info p {
    color: var(--text-color);
    margin-bottom: 1.75rem;
    line-height: 1.7;
    flex-grow: 1;
    font-size: 1rem;
  }

  .btn {
    padding: 0.7rem 1.5rem;
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
    font-size: 0.95rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    align-self: flex-start;
  }

  .btn:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export default Wrapper;
