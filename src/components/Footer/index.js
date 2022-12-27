import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://github.com/Mukulsh26/Reactjs-Tesla-Clone" target='_blank' >Tesla-Clone &copy; 2022</a>
                </div>
                <div>
                <a href="mailto:mukulsh7496@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/mukul-sharma-mm7m262002" target="_blank" >LinkedIn</a>
                <a href="https://github.com/Mukulsh26" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer