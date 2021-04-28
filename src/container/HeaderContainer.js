import React from 'react'
import Header from '../components/header'
import * as ROUTE from '../constants/routes'
import logo from '../logo.svg'

function HeaderContainer({children,...restProps}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTE.Home} src={logo} alt="Netflix"/>
        <Header.ButtonLink to={ROUTE.Signin}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}

export default HeaderContainer
