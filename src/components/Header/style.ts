import styled from "styled-components";

export const Container = styled.header`
background: var(--header);
width: 100%;
height: 100%;
padding: 1.5rem 7rem 1rem 7rem;

display: flex;
justify-content: space-between;
align-items: center;

h1 {
  font-size: 3.2rem;
  color: var(--white);
  span {
    color: var(--details);
  }
}

form {
  display: flex;
  align-items: center;

  input {
    height: 3.2rem;
    font-size: 2.4rem;

    background: rgba(196, 196, 196, 0.3);
    color: var(--white);
    border: none;
    border-radius: 0.3rem;
  }
  
  img {
    font-size: 2.4rem;
    width: 2rem;
    height: 2rem;
    margin-left: -3rem;
  }
}
`