import React, { Component } from 'react'
import { Divider ,Switch, Row, Col  } from 'antd';

import { Button } from "../../components/Form/CustomForm";
import styleLayout from '../../assets/styles/layout'
// import { host } from "../../services/config";
import FormModal from '../../components/Form/modals/ModalConten'
import { convertValueTrueFalse } from "../../services/tools";
import FromTable from '../../components/Form/FromTable'
import dataTest from '../../mocData/contenAll.json'

import { Fetch } from "../../services/fetch";
import { api } from '../../services/api';

export default class index extends Component {
  state = {
    loading: false,
    visible: false,
    onUpdate: false,
    contentAll: [{}],
    contentValue: {
      highlight_flag: "y",
      slide_flag: "n",
      value: [
        {
          detail: "",
          language_id: "1",
          title: "",
          soundName: "",
          soundPath: ""
        },
      ],
      images: [
      ]
    }
  }

  componentDidMount = () =>{
    this.getDataContent()
  }

  showModal = (value) => {
    this.setState({
      visible: value,
    })
  }

  handleOk = (keyButton) => async (value) => {
    console.log(keyButton)
    if(keyButton === 'save'){
      console.log(keyButton)
      console.log('keyButton',value)
      const res = await Fetch(api.createContent,value)
      console.log(res)
      // this.setState((state)=>({
      //   contentAll: [{...state.contentValue}]
      // }),()=> console.log(this.state.contentAll))
      // this.setState({ loading: true })
      // setTimeout(() => {
      //   this.setState({ loading: false, visible: false })
      // }, 3000)
    }

  }

  handleModal = () => (
    this.state.visible &&
    <FormModal 
    title="Create content" 
    onOk={this.handleOk} 
    onCancel={this.showModal} 
    visible={this.state.visible} 
    loading={this.state.loading}
    onUpdate={this.state.onUpdate}
    onclear={this.clearContentValue}
    setValue={this.state.contentValue}
    />
  )


  
  handleColumnTable = () =>{
     const columns = [{
      title: '#ID',
      key: 'key',
      dataIndex: 'key',
      width: 50,
    }, {
      title: 'Image',
      key: 'Image',
      width: 100,
      dataIndex: 'Image',
      render: text => <img src={`${text}`} alt="images" height={40} width={70}/>,
    }, {
      title: 'Title',
      key: 'Title',
      dataIndex: 'Title',
      width: 250,
      render: text => <p className="text-overflow-250">{text}</p>
    }, {
      title: 'Detail',
      key: 'Detail',
      dataIndex: 'Detail',
      width: 550,
      render: text => `${text?text.substring(0,120):text} ...`
    }, {
      title: 'AR',
      key: 'AR',
      width: 100,
      render: (text, record) => (
        <span>
          <Switch size="small" defaultChecked />
        </span>
      ),
    }, {
      title: 'Home slide',
      key: 'SlideShow',
      width: 100,
      render: (text, record) => (
        <span>
          <Switch size="small" defaultChecked />
        </span>
      ),
    }, {
      title: 'Hilghlight',
      key: 'Hilghlight',
      width: 100,
      render: (text, record) => (
        <span>
          <Switch size="small" defaultChecked />
        </span>
      ),
    },{
      title: '',
      key: 'Tools',
      width: 200,
      fixed: 'right',
      render: (text, record) => (
        <span>
         <Button type='brown' onClick={()=>this.editContent(record.key)}>Edit</Button>
         <Divider type="vertical" />
         <Button type='red' onClick={()=>this.deleteContent(record.key)}>Delete</Button>
        </span>
      ),
    },
  ];
  return columns
  }
  getDataContent = async () => {
    // const allContent = dataTest
    const data = await Fetch(api.getAllContent)
    // console.log('allContent', data)
    this.setState({
      ...this.state,
      contentAll:[...data.data]
      // contentAll:[...allContent]
    })
  }
  editContent = async (key) => {
    // console.log(key)
    const content = {...this.state.contentAll.find(content => String(content.id) === String(key))}
    // console.log('editContent',content)

    await this.setState({
      ...this.state,
      onUpdate: true,
      contentValue: {...content},
      visible: true,
    })
  }

  deleteContent = (key) => {
    console.log(key)
  }

  clearContentValue = () =>{
    this.setState({
      ...this.state,
    loading: false,
    visible: false,
    onUpdate: false,
    contentValue: {
      highlight_flag: "y",
      slide_flag: "n",
      value: [
        {
          detail: '',
          language_id: "1",
          title: '',
          soundName: '',
          soundPath: ''
        },
      ],
      images: [
      ]
    }
    })
  }

  
  render() {
    // console.log('contentValue:',this.state.contentValue)
    // console.log('inde:',this.state.contentAll)
    return (
      <React.Fragment>
      <h2>Content Museum</h2>
      <br/>
       <div style={styleLayout.boxContent}>
        <Row type="flex" justify="space-between">
          <Col span={8}>col-8</Col>
          <Col span={8} className='justify-flex-end'><Button type="primary" onClick={()=>this.showModal(true)}>Creact content</Button></Col>
          {this.handleModal()}
        </Row>
        <br/>
        <Row>
          <FromTable columns={this.handleColumnTable()} dataSource={this.state.contentAll}/>
        </Row>
       </div>
      </React.Fragment>
    )
  }
}
