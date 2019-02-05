import React, { Component } from 'react'
import { Table } from 'antd';
import { host } from "../../services/config";
// import dataTest from '../../mocData/contenAll.json'


export default class FromTable extends Component {
  findContent= (value,key) =>{
    let data = value.filter(d => d.title.length > 0)
     return data.length > 0 ? data.find(value => value.title )[key] : ""
  }

   createDateForTable =(dataTest) =>{
    let data = dataTest.map((data,key) => {
      let newdata = {}
      newdata.key = data.id && data.id 
      newdata.Image = data.images && data.images.length > 0 ? `${host}${data.images.find(image=> image.active_title === "y").imagePath}` :"/img/nopic.png"
      newdata.Title = data.value && this.findContent(data.value,"title")
      newdata.Detail = data.value && this.findContent(data.value,"detail")
      return  newdata
    })
    // console.log('createDateForTable',data)
    return data
  }
  render() {
    const { columns , dataSource} = this.props
    return (
      <React.Fragment>
        <Table 
          columns={this.props.columns} 
          dataSource={this.createDateForTable(dataSource)} 
          scroll={{ x: 1500 }}  size="middle"
          rowKey={record => record.key||"9uu"}
        />
      </React.Fragment>
    )
  }
}




