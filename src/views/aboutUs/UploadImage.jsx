import React, { Component } from 'react'
import { Upload, Icon, message } from 'antd'
import { api } from "../../services/api"
import { FetchAPI } from "../../services/fetch"
export default class UploadImage extends Component {
    state = {
        loading: false,
      };
    
      handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          console.log('info.file',info.file)
          this.props.onChange(info.file.response.response[0].imagePath)

        //   getBase64(info.file.originFileObj, imageUrl => this.setState({
        //     imageUrl,
        //     loading: false,
        //   }));
        }
      }
      actionApi = async ()=>{
        const { url } = await FetchAPI(api.uploadImage)
        return url
    }
    render() {
        const uploadButton = (
          <div>
            <Icon type={this.state.loading ? 'loading' : 'plus'}  style={{ fontSize: '40px' }}/>
            <div className="ant-upload-text">{this.props.name || 'Upload'}</div>
          </div>
        )
        const imageUrl = this.props.imageUrl
        return (
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={this.actionApi}
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" width={180} height={180}/> : uploadButton}
          </Upload>
        )
    }
}

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('You can only upload JPG ro PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  
