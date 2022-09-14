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
`

export const Social = styled.div`
display: flex;
gap: 1rem;

img {
  width: 3.5rem;
}

`