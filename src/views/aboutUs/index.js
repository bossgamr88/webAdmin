import React, { Component } from 'react'
import FormAbout from './FormAbout'
import UploadImage from './UploadImage'
import { Card,Row, Col } from 'antd'
import { host } from '../../services/config';
import styleLayout from '../../assets/styles/layout'
import { api } from "../../services/api";
import { Fetch } from "../../services/fetch";
import { Button } from "../../components/Form/CustomForm";
import {Tabs} from '../../components/Form/CustomForm'

const TabPane = Tabs.TabPane;
export class AboutUS extends Component {

constructor(props) {
    super(props)
    this.state = {
        loading: false,
        email: "",
        facebook: "",
        instagram: "",
        img_map: "",
        img_introduction: "",
        value:[
            // {
            //   name: "1บ้านปาร์คนายเลิศ",
            //   detail: "บ้านปาร์คนายเลิศเปิดให้ชมบ้านทุกวันพฤหัสบดีและวันศุกร์,เวลานำชมมี 3 รอบ เวลา 11.00 น.14.00 น. และ 16.00 น.",
            //   introduction: "นายเลิศ หรือ พระยาภักดีนรเศรษฐ (เลิศ เศรษฐบุตร) เกิดเมื่อวันที่ 22 มิถุนายน พุทธศักราช 2415 ท่านเป็นผู้ที่มีใจรักในการริเริ่มสร้างสรรค์โดยแท้ สมกับชื่อ'ี่บิดาของท่านตั้งให้ว่า ‘เลิศ สะมันเตา’ ซึ่งหมายถึงว่า ‘ดีเลิศเหนือสิ่งที่อยู่โดยรอบ หรือดีเหนือใคร ดีไม่เหมือนใคร‘ ชื่อนี้ได้กลายเป็นคำแสลงยอดนิยมในยุคเก่าก่อนไปโดยปริยาย โดยนายเลิศในวัยหนุ่มนั้น เป็นทั้งผู้ประกอบการ นักธุรกิจ นักพัฒนา นักลงทุน และผู้มีใจบุญสุนทาน นอกจากนี้ ตลอดชีวิตของท่านยังทุ่มเทเพื่อรักษาวัฒนธรรมและขนบธรรมเนียมตามแบบฉบับของสยามประเทศไว้เป็นอย่างดี แม้กระทั่งพระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัว (รัชกาลที่ 6) ยังทรงชื่นชมนายเลิศในความมุ่งมั่นตั้งใจ และทรงพระราชทานบรรดาศักดิ์เป็น ‘พระยาภักดีนรเศรษฐ’ ในฐานะที่เป็น ‘เศรษฐีผู้เป็นที่รักของทุกคน’ ในพุทธศักราชปี 2468 นายเลิศยังเป็นนักธุรกิจแถวหน้าที่สร้างปรากฏการณ์ ‘ครั้งแรก’ ให้กับประเทศไทย อย่างธุรกิจโรงงานน้ำแข็งแห่งแรก, ตึกพาณิชย์ที่สูงที่สุดในปี พุทธศักราช 2470, ธุรกิจนำเข้ายานยนตร์จากยุโรปและอเมริกา, บริการรถเมล์ขนส่งตามเมืองหลัก ก่อนที่ท่านจะถึงแก่อนิจกรรมเมื่อวันที่ 15 ธันวาคม พุทธศักราช 2488 โดยมีภรรยาผู้เป็นที่รัก คุณหญิงสิน ภักดีนรเศรษฐ (เตวิทย์) และบุตรสาวของท่าน คือ ท่านผู้หญิงเลอศักดิ์ สมบัติศิริ รับช่วงดูแลกิจการสืบไป แม้นายเลิศจะจากไป แต่หลักในการทำงานของท่านยังคงฝังรากลึกจากรุ่นสู่รุ่น นั้นคือ พรหมวิหาร 4 (เมตตา กรุณา มุทิตา อุเบกขา) ซึ่งยังคงเป็นองค์ประกอบความสำเร็จที่อยู่เบื้องหลังธุรกิจของนายเลิศทั้งในอดีต ปัจจุบัน และอนาคต",
            //   address:"4 ซอยสมคิด ถนนเพลินจิต กรุงเทพมหานคร 10330",
            //   language_id: "1"
            // },
          ]
      }
}

onChangeValues = (key, language=null) => (e) =>{
  const data = e.target?e.target.value:e
  if (['name','detail','introduction', 'address'].findIndex((d) => d === key) !== -1){
    const {value} = this.state
    let newData = value
    let object = newData.filter(v => v.language_id === language)
    if (newData.length < 1 || object.length < 1){
       this.setState({
        value: [
        ...this.state.value, 
          { 
          [key]:data , 
          language_id : language 
          }
        ]
       })
    } else {
      const select = value && value.find((v) => v.language_id === language);
      const findIndex = value && value.findIndex(v => v.language_id === language);
      select[key] = data;
      newData[findIndex] = select
      this.setState({
        ...this.state, 
        value: newData
      })
    }

  } else {
    this.setState({
      [key]: data
    })
  }
}

handlelImage = (path) => {
  let imagePath = host+path
  return imagePath
}
 
callbackTab = (key) => {
    this.forceUpdate()
}
handlelClick=(key)=>()=>{
  if(key === 'Cancle'){
    this.getDataAboutUs()
  } else if(key==='Update'){
    
  }
}

getDataAboutUs = async () => {
  const response =  await Fetch(api.getAboutUs)
  console.log('getDataAboutUs',response.response)
  if(response && response.response){
    this.setState({
      ...response.response
    })
  }
}

componentDidMount(){
  this.getDataAboutUs()
}

  render() {
    console.log("test", this.state)
    const {loading} = this.state
    return (
      <React.Fragment>
         <div>AboutUS</div>
          <div style={styleLayout.boxContent}>
              <Card className="box-shadows">
              <Row type="flex" justify="space-between" align="middle">
                  <Col span={16}>
                    <Tabs defaultActiveKey="1" onChange={this.callbackTab}>
                        <TabPane tab="Thai" key="1"><FormAbout setValue={this.state} language='1' onChange={this.onChangeValues} /></TabPane>
                        <TabPane tab="English" key="2"><FormAbout setValue={this.state} language='2' onChange={this.onChangeValues} /></TabPane>
                        <TabPane tab="Chainese" key="3"><FormAbout setValue={this.state} language='3' onChange={this.onChangeValues}  /></TabPane>
                        <TabPane tab="Japanese" key="4"><FormAbout setValue={this.state} language='4' onChange={this.onChangeValues}  /></TabPane>
                    </Tabs>
                  </Col>
                  <Col span={6}>
                  <h5>Map image</h5>
                    <UploadImage 
                      name='Upload Map' 
                      onChange={this.onChangeValues('img_map')}
                      imageUrl={this.state.img_map?this.handlelImage(this.state.img_map): ''} 
                    />
                    <br/>
                  <h5>Image for introduction</h5>
                    <UploadImage 
                      name='Upload Intro' 
                      onChange={this.onChangeValues('img_introduction')}
                      imageUrl={this.state.img_introduction?this.handlelImage(this.state.img_introduction): ''} 
                    />
                    
                  </Col>
              </Row>
                
              </Card>
              <Row type="flex" justify="center" className="margin-10 ">
              <div >
                <Button key="back" onClick={this.handlelClick('Cancle')} style={{margin: 10}}>Cancle</Button> 
                <Button key="submit" type="primary" loading={loading} onClick={this.handlelClick('Update')}>Update</Button>
              </div>
              </Row>
          </div>
         

      </React.Fragment>
    )
  }
}

export default AboutUS
