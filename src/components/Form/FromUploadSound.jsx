import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { api } from "../../services/api";
import { FetchAPI } from "../../services/fetch";
import { Upload, message, Button, Icon, Col, } from 'antd';
import { host } from "../../services/config";
import { Tooltip } from 'antd';
export default class FromUploadSound extends Component {
    constructor(props){
        super(props)
        this.state = {
            fileList: props.fileList || [],
        }
    }
    onChange= (info) => {
        if (info.file.status === undefined ){
            // console.log('success',info.file);
            return false
        }
        if (info.file.status !== 'uploading') {
            // console.log('uploading',info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            console.log('done',info.file);
            message.success(`${info.file.name} file uploaded successfully`);
            this.props.SoundName(info.file.name)
            this.props.SoundPath(info.file.response.response[0].soundPath||'')

            // this.setState({
            //     fileList:[...info.fileList],
            // })

        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
        this.setState({
            fileList:[...info.fileList],
        })
    }

    onRemove = (list) =>{
        // console.log('onRemove', list)
        this.props.SoundName('')
        this.props.SoundPath('')
    }

    actionApi = async ()=>{
        const { url } = await FetchAPI(api.uploadSounds)
        // console.log('testurl' , url)
        return url
    }
    checkTypeSound = (file) => {
        console.log('checkTypeSound' , file)
        const isJPG = file.type === 'audio/mp3';
        if (!isJPG) {
            message.error('You can only upload MP3 file!');
            return false
        }
        return true
    }
 
  render() {
      const { name, spanBottom } = this.props
      const { fileList } = this.state
      const tipSound = <span>upload file .mp3</span>;
    //   console.log('fileList', this.state)
    return (
        <React.Fragment>
        <div style={{marginTop: 10}}>
            <Col span={6}>
                <div style={{ minHeight: 30, paddingRight: 10, justifyContent: 'flex-end' ,alignItems: 'center', display: 'flex'}}>{`${name || 'name'} :`}</div>
            </Col>
            <Col span={18}>
                <Upload 
                    name= 'upload'
                    fileList={fileList}
                    action= {this.actionApi}
                    onChange={this.onChange}
                    onRemove={this.onRemove}
                    beforeUpload={this.checkTypeSound}
                    disabled={fileList.length > 0 && true}
                >
                { (fileList && fileList.length) < 1 ?
                    <Tooltip placement="top" title={tipSound}>
                        <Button disabled={fileList.length > 0 && true}>
                            <Icon type="upload" /> Click to Sound
                        </Button>
                    </Tooltip>
                    : 
                    fileList.map((item,key) => (
                        <audio controls src={item.response ? host+item.response.response[0].soundPath: host+item.url || ""}  key={key}>
                               Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    ))
                }
                </Upload>
                {/* <input type="file" onChange={this.upload} /> */}
            </Col>
        </div>
        {Array.from({ length: spanBottom }, (v, k) => <br key={k} />)}
    </React.Fragment>
    )
  }
}

FromUploadSound.propTypes = {
    name: PropTypes.string,
    spanBottom: PropTypes.number,
};

FromUploadSound.defaultProps = {
    spanBottom: 2,
  };
