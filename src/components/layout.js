import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Footer from "./footer"
import Header from "./header"

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          {children}
        </Content>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
