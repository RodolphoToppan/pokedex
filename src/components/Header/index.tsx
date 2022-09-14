import { Container, Social } from "./style";
import githubImg from '../../assets/github.svg'
import instagramImg from '../../assets/instagram.svg'
import linkedinImg from '../../assets/linkedin.svg'
import whatsappImg from '../../assets/whatsapp.svg'

export function Header() {
  return (
    <Container>
      <h1>Poke<span>DB</span></h1>
      <Social>
      <a href="https://api.whatsapp.com/send/?phone=551796321221&text&type=phone_number&app_absent=0" target="_blank">
          <img src={whatsappImg} alt="whatsapp" />
        </a>
        <a href="https://www.instagram.com/rodolphot/" target="_blank">
          <img src={instagramImg} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/rodolpho-toppan-a74250205/" target="_blank">
          <img src={linkedinImg} alt="LinkedIn" />
        </a>
        <a href="https://github.com/RodolphoToppan" target="_blank">
          <img src={githubImg} alt="GitHub" />
        </a>
      </Social>
    </Container>
  )
}