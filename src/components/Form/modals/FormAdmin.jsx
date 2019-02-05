import React, { Component } from 'react'
import FormInput from '../FormInput'

export default class FormContent extends Component {
  render(){
    return(
      <React.Fragment>
        <FormInput
          name = "Username"
          placeholder="Enter your Username"
        />
        <FormInput
          name = "Email"
          placeholder="Enter your Email"
        />
      </React.Fragment>
    )
  }
}