import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem 0 3rem;
`

const Title = styled(Link)`
  color: #000;
  font-size: 3rem;
  text-decoration: none;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavItem = styled(Link)`
  color: #999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;

  &:hover {
    color: #666;
  }

  &.active {
    font-weight: bold;
    color: #333;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <StyledHeader>
      <h1>
        <Title to="/">{data.site.siteMetadata.title}</Title>
      </h1>
      <nav>
        <NavList>
          <li>
            <NavItem to="/" activeClassName="active">
              Home
            </NavItem>
          </li>
          <li>
            <NavItem to="/blog" activeClassName="active">
              Blog
            </NavItem>
          </li>
          <li>
            <NavItem to="/about" activeClassName="active">
              About
            </NavItem>
          </li>
          <li>
            <NavItem to="/contact" activeClassName="active">
              Contact
            </NavItem>
          </li>
        </NavList>
      </nav>
    </StyledHeader>
  )
}

export default Header
