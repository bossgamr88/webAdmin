import React, { Component } from 'react'
import { Modal, Button } from '../../components/Form/CustomForm'
import { Fetch } from '../../services/fetch'
import {api} from '../../services/api'
const { queryPostList } = api

export default class index extends Component {
    state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }

  async componentDidMount(){
    const data = await Fetch(queryPostList,{})
    console.log(data)
  }
  render() {
    return (
        <div>
        <Button type="primary" onClick={this.showModal}>Modal</Button>
        <Modal
          title="tesssssssss"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
          footer={[
            <Button key="back" >Cancle</Button>,
            <Button key="submit" type="primary">Save</Button>,
          ]}
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    )
  }
}
