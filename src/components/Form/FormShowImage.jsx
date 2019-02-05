import React, { Component } from 'react'
import { Carousel } from 'antd';
import { host } from "../../services/config";

export default class FormShowImage extends Component {
  render() {
    const { setValue } = this.props
    return (
        <Carousel autoplay>
        {
          setValue.length > 0 ? (
            setValue.map((image,key) => (
              <div key={key} >
                <img src={`${host}${image.imagePath}`} alt="images" height={300} width='100%'/>
              </div>
            ))
            ) : null
          }
      </Carousel>
    )
  }
}
