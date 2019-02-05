import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd';
import FormSwitch from '../FormSwitch'
import FormContent from './FormContent'
import FormShowImage from '../FormShowImage'
import FormUploadImage from '../FormUploadImage'
import { Button, Modal, Tabs } from "../CustomForm";
import { host } from "../../../services/config"
import { convertValueTrueFalse } from "../../../services/tools";
import { openNotification } from "../../../services/tools";
const TabPane = Tabs.TabPane;
export default class FormModal extends Component {
  constructor(props){
    super(props)
    this.state = {
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
        images: [],
        imagesRemove:[]
      }
    }
  }

  onChangeValues = (key, active = null) => (e) =>{
    const data = !e.target ? e : e.target.value

    if (['detail','language_id','title', 'soundName','soundPath'].findIndex((d) => d === key) !== -1){
      const {value} = this.state.contentValue
      let newData = value
      let object = newData.filter(v => v.language_id === active)

      if (newData.length < 1 || object.length < 1){
         this.setState({
          ...this.state,
          contentValue:{
            ...this.state.contentValue,
            value: [
            ...this.state.contentValue.value, 
              { 
              [key]:data , 
              language_id : active 
              }
            ]
          }
         })
      } else {
        const select = value && value.find((v) => v.language_id === active);
        const findIndex = value && value.findIndex(v => v.language_id === active);
        select[key] = data;
        newData[findIndex] = select
        this.setState({
          ...this.state, 
          contentValue:{
            ...this.state.contentValue,
            value: newData,
          }
        })
      }
  
    } else if(['images'].findIndex((d) => d === key) !== -1){
      const { images } = this.state.contentValue
      let image = {
        imageID: data.uid,
        active_title: active,
        imageName: data.response.response[0].imageName,
        imagePath: data.response.response[0].imagePath,
        action: data.action
        
      }
      if(images && images.length > 0) {
        this.setState({
          contentValue:{
            ...this.state.contentValue,
            images: [
              ...this.state.contentValue.images,
              {...image}
            ]
          }
        })
      } else {
        this.setState({
          contentValue:{
            ...this.state.contentValue,
            images: [
              ...this.state.contentValue.images,
              {...image}
            ]
          }
        })

      }
    
    } else {
      this.setState({
        contentValue:{
          ...this.state.contentValue,
          [key]: convertValueTrueFalse(data)
        }
      })
    }
}

onRemoveImages = async (value) => {
  const {images, imagesRemove} = this.state.contentValue
  await this.setState({
     contentValue:{
      ...this.state.contentValue,
       images: [...images.filter(item => String(item.imageID) !== String(value.imageID))],
       imagesRemove:[...imagesRemove,{...value}]
     }
   },()=>console.log('inde:',this.state.contentValue))
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
    images: []
  }
  })
}

componentWillMount(){
  console.log('componentWillMount')
  this.setState((state)=>({
    contentValue: {
      ...this.props.setValue,
      imagesRemove:[],
    },
  }))
}
componentWillUnmount(){
  this.props.onclear()
  this.clearContentValue()
}
  findImages = (value,active_title) => {
    let values = value.filter( image => image.active_title === active_title )
    return this.getImagesfileList(values)
  }

  getImagesfileList = (values) => {
    // console.log('getImagesfileList')
        let fileList = values.map(value => {
            value.uid = value.imageID
            value.name = value.imageName
            value.status = 'done'
            value.url =  `${host}${value.imagePath}`
            return value
          }
        )
        return fileList
  }

  handleCancel = async () => {
   await this.clearContentValue()
   await this.props.onCancel(false)
  }
      render() {
        const { title, visible, loading, onUpdate} = this.props
        const { contentValue } = this.state
        const OkButton = onUpdate ? 
        <Button key="submit" type="primary" loading={loading} onClick={this.handleClick('update')}>Update</Button>:
        <Button key="submit" type="primary" loading={loading} onClick={this.handleClick('save')}>Save</Button>
        console.log('this.state.contentValue',this.state.contentValue)
        return (
            <Modal
              centered
              title={title||null} 
              visible={visible}
              onOk={onUpdate ? this.handleClick('update'):this.handleClick('save')}
              onCancel={this.handleCancel}
              width={700}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Cancle</Button>,OkButton,
              ]}
            >
              <FormShowImage setValue={contentValue.images && contentValue.images.length > 0 ? contentValue.images : []}/>
              <Row>
                <Col span={9}>
                  <Card className="box-shadows margin-r-10 height-max-575">
                    <h4>-- Image tittle --</h4>
                      <FormUploadImage 
                        max={1}
                        name='Image tittle'
                        onRemove={this.onRemoveImages}
                        onChange={this.onChangeValues('images','y')}
                        fileList={contentValue.images && contentValue.images.length > 0 ? this.findImages(contentValue.images,'y') : null }
                      />
                    <br/><hr/><br/>
                    <h4>-- Image more --</h4>
                      <FormUploadImage 
                        name='Image more ' 
                        onRemove={this.onRemoveImages}
                        onChange={this.onChangeValues('images','n')}
                        fileList={contentValue.images && contentValue.images.length > 0 ? this.findImages(contentValue.images,'n') : null }
                      />
                  </Card>
                </Col>
                <Col span={15}>
                  <Card className="box-shadows margin-b-10 " >
                    <Tabs>
                      <TabPane tab="Thai" key="1"><FormContent language='1' onChange={this.onChangeValues} setValue={contentValue}/></TabPane>
                      <TabPane tab="English" key="2"><FormContent language='2' onChange={this.onChangeValues} setValue={contentValue}/></TabPane>
                      <TabPane tab="Chainese" key="3"><FormContent language='3' onChange={this.onChangeValues} setValue={contentValue}/></TabPane>
                      <TabPane tab="Japanese" key="4"><FormContent language='4' onChange={this.onChangeValues} setValue={contentValue}/></TabPane>
                    </Tabs>
                  </Card>
                  <Card className="box-shadows" >
                    <h4>-- Option --</h4>
                    <Row>
                      <Col span={12}>
                        <FormSwitch 
                          name='Slide Show' 
                          onChange={this.onChangeValues('slide_flag')} 
                          setValue={contentValue.slide_flag || false}
                        />
                      </Col>
                      <Col span={12}>
                        <FormSwitch 
                          name='Highlight' 
                          onChange={this.onChangeValues('highlight_flag')} 
                          setValue={contentValue.highlight_flag || false}
                        />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Modal>
        );
      }
}

FormModal.defaultProps = {
  title: "",
  loading: false,
  visible: false,
  onclear: ()=> alert('กรุณาใส่ฟั่งชั่น onclear สำหรับ onclear'),
  onOk: ()=> alert('กรุณาใส่ฟั่งชั่น onOk สำหรับ onOk'),
  onCancel: ()=> alert('กรุณาใส่ฟั่งชั่น onCancel สำหรับ Modal'),
}
FormModal.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  visible: PropTypes.bool,
  onclear: PropTypes.func,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}