import styled from 'styled-components'

export const Card = styled.div`
margin: 5rem auto;
padding: 2rem;
width: 35rem;
height: 45rem;
border: 0.5rem solid var(--border);
border-radius: 0.5rem;
background: var(--bg-card);
`

export const Content = styled.div`
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