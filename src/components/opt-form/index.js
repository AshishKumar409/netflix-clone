import React from 'react'
import { Container ,Input,Button,Break,Text} from './styles/opt-form'

function OptForm({children,...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

OptForm.Input = function OptformInput({...restProps}){
  return <Input {...restProps}/>
}
OptForm.Button = function OptformButton({children,...restProps}){
  return <Button {...restProps}>{children}
  <img src="/images/icons/chevron-right.png" alt="Right Arrow"/>
  </Button>
}
OptForm.Text = function OptformText({children,...restProps}){
  return <Text {...restProps}>{children}
  
  </Text>
}

OptForm.Break = function OptformBreak({...restProps}){
  return <Break {...restProps} />
}


export default OptForm
