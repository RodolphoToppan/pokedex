import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 100%;
padding: 2rem 7rem 1rem 7rem;

h3 {
  font-size: 3rem;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0rem 5rem 0rem;
  font-size: 4.8rem;

  input {
    border: none;
    border-radius: 0.4rem;
    padding: 0.5rem;
  }

  button {
    height: 3.5rem;
    background: transparent;
    border: none;
    margin-left: -4rem;
  }
}
`

export const Card = styled.div`
padding: 2rem;
width: 35rem;
height: 42rem;
border: 0.5rem solid var(--border);
border-radius: 0.5rem;
background: var(--bg-card);
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
align-content: flex-start;
align-items: flex-start;
img {
  margin: 0 auto 2rem auto;
  width: 25rem;
  height: 25rem;
}
h2, h3 {
  margin-left: 2rem;
  color: var(--text);
  text-transform: capitalize;
}
h2 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}
h3 {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}
`

export const Types = styled.div`
display: flex;
margin-left: 2rem;
gap: 0.7rem;

p {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--border);
  height: 2.4rem;
  width: 8rem;
  border-radius: 0.7rem;
  text-transform: capitalize;
  color: var(--white);
  font-size: 1.4rem;
}
`