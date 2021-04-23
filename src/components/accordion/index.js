import React,{useState,createContext,useContext} from 'react'
import {Container, Inner, Title,Item,Header,Body} from './styles/accordion'
const UseToggle = createContext()
function Accordion({children,...restProps}) {
  return (
    <Container {...restProps} ><Inner>{children}</Inner></Container>
  )
}


Accordion.Title = function AccordionTitle({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({children,...restProps}){
   const [toggle,setToggle] = useState(false)

   

  
  return <UseToggle.Provider value={{toggle,setToggle}}><Item {...restProps}>{children}</Item></UseToggle.Provider> 
}
Accordion.Header = function AccordionHeader({children,...restProps}){
  const {toggle,setToggle} = useContext(UseToggle)

  return <Header {...restProps} onClick={()=>setToggle((toggle)=>!toggle)}>
    {children}
     {toggle?<img src="/images/icons/close-slim.png" alt="close"/> :
     <img src="/images/icons/add.png" alt="open"/> }
    </Header>
}
Accordion.Body = function AccordionBody({children,...restProps}){
  const {toggle} = useContext(UseToggle) 

  return toggle?<Body {...restProps}>{children}</Body>:null
}


export default Accordion
