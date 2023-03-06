import "./App.css"
import styled from "styled-components";

const NavbarCont = styled('div')`
background-color: lightgray;
height: 40px;
gap: 400px;
padding: 10px 20px;
font-family:sans-serif;
display: flex;
align-items: center;
justify-content: space-around;
`
const T = styled('div')`
color: white;
padding-right: 10px;
`
const Te = styled('div')`
color: red;
`
const Text = styled('div')`
display: flex;
`
const Button = styled('div')`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
`

function Navbar() {
    return (
        <NavbarCont className="Navbar">
            <Text className="s">
                <T className="t">ПРОДАЖА ЭЛЕКТРОНИКИ  </T>
                <Te className="te">ПО ЛУЧШИМ ЦЕНАМ</Te>
            </Text>
            <Button classname="Buttons">
                <p>English</p>
                <p>|</p>
                <p>Telegram Bot</p>
                <p>Login / Registration</p>
            </Button>
        </NavbarCont>
    )
}

export default Navbar;