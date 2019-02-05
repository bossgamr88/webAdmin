import React, { Component } from 'react'
import {Button,Modal} from '../CustomForm'
import {Row, Col,Input,Select,Icon} from 'antd'
const StyleInput = {
    style : {
        marginBottom: '16',
        width: '50%',
    },
    text : {
        // textAlign: 'center',
        fontWeight: 'bold',
        marginTop : '10px',
        marginBottom : '20px'
    },
    positionInput : {
      marginBottom : '12px',
      width: '60%',   
    },
    textStatus : {
        fontWeight: 'bold',
        fontSize: 'smaller'
    },
    btnPosition : {
        float: 'right'
    }

}
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class CreateAdmin extends Component {
    state = {
        loading: false,
        visible: false,
      }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
        
      render() {
          const {visible,loading} = this.state
      return (
        <div>
            <Button type="primary" style={StyleInput.btnPosition} onClick={this.showModal} size="large"><Icon type="plus" />Create User</Button>
        <Modal
          visible={visible}
          title = "Create Admin User"
          visible = {this.state.visible}
            onOk = {this.handleOk}
            onCancel = {this.handleCancel} 
            footer={[
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk} size="large" style={{ width: 200 }}>
                  Save and Send Email
                </Button>,
              ]}
          >
        <Row>
            <Col span={6}>
            <p style={StyleInput.text}>FristName:</p>
            <p style={StyleInput.text}>LastName:</p>
            <p style={StyleInput.text}>Username:</p>
            <p style={StyleInput.text}>Email:</p>
            <p style={{marginTop : '57px',fontWeight: 'bold',}}>Leval:</p>
            </Col>   
            <Col span={18}>
            <Input style={StyleInput.positionInput}/>
            <Input style={StyleInput.positionInput}/>
            <Input style={StyleInput.positionInput}/>
            <Input style={StyleInput.positionInput}/>
            {/* <span>* กรุณาระบุอีเมลล์ที่ใช้งานจริง</span> */}
            <p style={StyleInput.textStatus}>* Please specify actual email.</p>
            <Select  defaultValue="Select Leval" style={{ width: 200 }} onChange={handleChange}>
                <Option value="Administrator">Administrator</Option>
                <Option value="SubperAdmin">SubperAdmin</Option>
                <Option value="Sale">Sale</Option>
                <Option value="User">User</Option>
            </Select>
            </Col>
        </Row>
          
        </Modal>
        </div>
      )
    }
  }