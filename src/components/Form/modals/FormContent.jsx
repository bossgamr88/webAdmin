import React, { Component } from 'react'
import FormInput from '../FormInput'
import FormTextArea from '../FormTextArea'
import FromUploadSound from '../FromUploadSound'
import { host } from "../../../services/config"

export default class FormContent extends Component {

getSound = (value,language) => {
  if(value && this.findLanguage(value, language)) {
    if(this.findLanguage(value, language).soundName){
      let fileList = [{
        uid: '1',
        name: value.find(data=>(data.language_id.toString() === language )).soundName || null,
        status: 'done',
        url: value.find(data=>(data.language_id.toString() === language )).soundPath || null,
      }]
      return fileList
    }
    return []
  }
}

findLanguage = (value, language) => {
  return value.find(data=>(data.language_id.toString() === language ))
}

  render() {
    const {setValue=null, onChange, language} = this.props
    // console.log('value',setValue)
    return (
      <React.Fragment>
        <FormInput 
            name= "Title" 
            placeholder="Enter your title." 
            setValue={ setValue.value && this.findLanguage(setValue.value, language) ? this.findLanguage(setValue.value, language).title : null} 
            onChange={onChange('title', language)}
        />
        <FormTextArea 
            minRows={10}
            maxRows={10}
            spanBottom={11}
            name= "Detil"
            placeholder="Enter detil your content."  
            setValue={ setValue.value && this.findLanguage(setValue.value, language) ? this.findLanguage(setValue.value, language).detail : null} 
            onChange={onChange('detail', language)}
        />
        <FromUploadSound
          name='Sound'
          fileList={ setValue.value && this.findLanguage(setValue.value, language) ? this.getSound(setValue.value,language) : null }
          // onChange={onChange}
          SoundName={onChange('soundName', language)}
          SoundPath={onChange('soundPath', language)}

        />
      </React.Fragment >
    )
  }
}
