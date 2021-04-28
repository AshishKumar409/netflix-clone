import React from 'react'
import Feature from '../components/feature'
import OptForm from '../components/opt-form'
import AccordionContainer from '../container/AccordionContainer'
import FooterContainer from '../container/FooterContainer'
import HeaderContainer from '../container/HeaderContainer'
import JumboContainer from '../container/JumboContainer'

function Home() {
  return (
    <>
    
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, Tv Programs and more.</Feature.Title>
             <Feature.SubTitle>
                  Watch Anywhere. Cancel at anytime.
             </Feature.SubTitle>
        <OptForm>
             <OptForm.Input placeholder="Email address" />
             <OptForm.Button>Try it now</OptForm.Button>
             <OptForm.Break />
             <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      </OptForm>
        </Feature>
        
      </HeaderContainer> 

        <JumboContainer/>
        <AccordionContainer/>
        <FooterContainer/>
    </>
  )
}

export default Home
