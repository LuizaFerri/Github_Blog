import effect1 from "../../assets/effect1.svg"
import effect2 from "../../assets/effect2.svg"
import logo from "../../assets/logo.svg"
import {ContainerHeader,Logo} from "./styles"


export function Header () {
    return (
        <ContainerHeader>
        <img src={effect1} alt="effect" />
        <Logo src={logo} alt="logo" />
        <img src={effect2} alt="effect" />
        </ContainerHeader>
    )
}