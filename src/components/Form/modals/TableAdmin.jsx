import React, { Component } from 'react'
import { Table, Button,Divider,Tabs,Tag} from 'antd';



const columns = [
  {
    title: '#',
    dataIndex: 'number',
    sorter: false,
    align : 'center',
    // render: name => `${name.first} ${name.last}`,
    width: '3%',
    align : 'center'
  },{
  title: 'Fullname',
  dataIndex: 'name',
  sorter: false,
  // render: name => `${name.first} ${name.last}`,
  width: '10%',
  align : 'center'
}, {
  title: 'Username',
  dataIndex: 'username',
  width: '10%',
  align : 'center'
}, {
  title: 'Email',
  dataIndex: 'email',
  width: '10%',
  align : 'center'
},{
  title: 'Users Role',
  dataIndex: 'usersrole',
  align : 'center',
  width: '10%'
},{
  title:'Tools',
  dataIndex : 'tools',
  align : 'center',
  width: '10%',
  render: (text, record) => (
    <span>
      <Button   style={{backgroundColor:'#AE7955',color:'#FFFFFF'}}>Edit</Button> 
      <Divider type="vertical" />
      <Button  style={{backgroundColor:'#D40B1F',color:'#FFFFFF'}}>Delete</Button>
    </span>
  ),
}];

// Mock Data 
const data = [];
for(let i=0; i<50; i++ ){
  data.push({
      key : i ,
      number : `No.${i+1}`,
      name : `John Doe`,
      email:`test123@gmail.com`,
      username : `bossgamr88`,
      usersrole : `Admin`
      
  })
}




//
const tableStyle = {
    style : {
        marginTop: '10%',
        
    }
}




export default class AdminList extends Component {

  render(){
    return( 
      <Table style={tableStyle.style} columns={columns} dataSource={data} size="small"  bordered/>
    )
  
}
}