import React, { Component } from 'react'
import {Input,Icon} from 'antd'

const SeachBox = {
    style : {
        width : '20%',
        float: 'right',
        marginTop: '1%',
        // marginTop: '5%',
        // marginBottom: '10%',
        // marginRight: '0%',
         marginLeft: '100%', 

    }
}

export default class SeachAdmin extends Component {
  render() {
    return (
      <div>
          <Input placeholder="Seach Admin User" size="default" style={SeachBox.style}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
      </div>
    )
  }
}