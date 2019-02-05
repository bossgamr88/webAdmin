import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { api } from "../../services/api"
import { FetchAPI } from "../../services/fetch"
import { Button, Icon, message, Upload,Tooltip } from 'antd'

export default class FormUploadImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            fileList: props.fileList || [],
        }
    }
    componentDidUpdate = (prevProps) => {
        if(JSON.stringify(prevProps) !== JSON.stringify(this.props)){
            this.setState({
                fileList: this.props.fileList
            })
        }
    }

    onChange = (info) => {
        if (info.file.status === undefined ){
            return false
        }
        
        if (info.file.status !== 'uploading') {
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            info.file.action='insert'
            this.props.onChange(info.file)
            console.log('done',info.file, info.fileList);
            return true
            
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
        this.setState({
            fileList:[...info.fileList],
        })
    }
    checkTypeImage = (file) => {
        console.log('checkTypeSound' , file)
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJPG) {
            message.error('You can only upload jpeg ro png file!');
            return false
        }
        return true
    }
    onRemove = (list) =>{
        // console.log('onRemove', list)
        list.action = 'delete'
        this.props.onRemove(list) 
    }

    actionApi = async ()=>{
        const { url } = await FetchAPI(api.uploadImage)
        return url
    }
  render() {
      const { fileList } = this.state
      const { name, max } = this.props
      const tipUpload = <span>upload file .jpg or .png</span>;
    return (
        <Upload 
            // action= '//jsonplaceholder.typicode.com/posts/'
            listType= 'picture'
            fileList={fileList}
            action= {this.actionApi}
            onChange={this.onChange}
            onRemove={this.onRemove}
            className='upload-list-inline'
            beforeUpload={this.checkTypeImage}
            disabled={fileList && fileList.length >= max && true}
        >
         <Tooltip placement="bottom" title={tipUpload}>
            <Button disabled={fileList && fileList.length >= max && true}>
                <Icon type="upload" /> {`Upload ${name}`}
            </Button>
        </Tooltip>
        </Upload>
    )
  }
}


FormUploadImage.propTypes = {
    max: PropTypes.number,
}
FormUploadImage.defaultProps = {
    max: 5,
}