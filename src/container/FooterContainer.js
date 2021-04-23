import React from 'react'
import Footer from '../components/footer'

function FooterContainer() {
  return (
    <>
     <Footer>
       <Footer.Title>Questions? Contact Us.123(456)000</Footer.Title>
       <Footer.Break/>
       <Footer.Row>
         <Footer.Column>
           <Footer.Link href="#">FAQ's</Footer.Link>
           <Footer.Link href="#">Investor Relations</Footer.Link>
           <Footer.Link href="#">Privacy</Footer.Link>
           <Footer.Link href="#">Speed Test</Footer.Link>
           
         </Footer.Column>

         <Footer.Column>
           <Footer.Link href="#">Help Center</Footer.Link>
           <Footer.Link href="#">Jobs</Footer.Link>
           <Footer.Link href="#">Cookie Preferences</Footer.Link>
           <Footer.Link href="#">Legal Notices</Footer.Link>
           
         </Footer.Column>

         <Footer.Column>
           <Footer.Link href="#">Account</Footer.Link>
           <Footer.Link href="#">Ways To Watch</Footer.Link>
           <Footer.Link href="#">Coporate Information</Footer.Link>
           <Footer.Link href="#">Netflix Originals</Footer.Link>
         </Footer.Column>

         <Footer.Column>
           <Footer.Link href="#">Media Center</Footer.Link>
           <Footer.Link href="#">Terms Of Use</Footer.Link>
           <Footer.Link href="#">Contact Us</Footer.Link>
         </Footer.Column>
       </Footer.Row>
       <Footer.Break/>
       <Footer.Text>Netflix India.</Footer.Text>
     </Footer>
    </>
  )
}

export default FooterContainer
