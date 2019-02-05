import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd';
import FormAdmin from './FormAdmin'
import { Button, Modal, Tabs } from "../CustomForm";

export default class FormModal extends Component {
    constructor(props){
      super(props)
      this.state = {
        contentValue: {
          value: [
            {
                username : "",
                email : ""
            },
          ],
        }
      }
    }
    handleClick = (keyButton)=> async () => {
        if(keyButton === 'save'){
          console.log('handleClick')
          const onSave =  this.props.onOk('save')
          await onSave(this.state.contentValue)
          await openNotification("success","Success", "Create new content is success.")
          await this.clearContentValue()
        } else if(keyButton === 'update'){
          this.clearContentValue()
        }
      
      }
      clearContentValue = () =>{
        console.log('clearContentValue')
        this.setState({
        contentValue: {
          value: [
            {
                username : "",
                email : ""
            },
          ],
        }
        })
      }
}
