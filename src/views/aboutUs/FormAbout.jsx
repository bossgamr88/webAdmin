import React, { Component } from 'react'

import FormInput from '../../components/Form/FormInput'
import FormTextArea from '../../components/Form/FormTextArea'

class FormAbout extends Component {
    

    render() {
        const {setValue=null, onChange, language} = this.props
        return (
            <React.Fragment>
                <FormInput 
                    icon='user'
                    name= "Name" 
                    placeholder="Enter your company."  
                    setValue={ setValue.value && setValue.value.find(data=>(data.language_id.toString() === language )) ? setValue.value.find(data=>(data.language_id.toString() === language )).name :null} 
                    onChange={onChange('name', language)}
                />
                <FormInput 
                    icon='environment'
                    name= "Address" 
                    placeholder="Enter company Address."  
                    setValue={ setValue.value && setValue.value.find(data=>(data.language_id.toString() === language ))  ? setValue.value.find(data=>(data.language_id.toString() === language )).address:null}  
                    onChange={onChange('address', language)}
                />
                <FormInput 
                    icon='user'
                    name= "Email" 
                    placeholder="Enter company Email." 
                    setValue= { setValue.email || null}  
                    onChange={onChange('email', language)}
                />
                <FormInput 
                    name= "Facebook" 
                    placeholder="Enter company Facebook." 
                    setValue= { setValue ? setValue.facebook:null}  
                    addonBeforeName= "www.facebook.com/" 
                    onChange={onChange('facebook', language)}
                />
                <FormInput 
                    name= "Instagram" 
                    placeholder="Enter company Instagram." 
                    setValue= { setValue ? setValue.instagram:null}  
                    addonBeforeName="www.instagram.com/" 
                    onChange={onChange('instagram', language)}
                />
                <FormTextArea 
                    maxRows={5}
                    name= "Detail" 
                    placeholder="Enter company Detail."  
                    setValue={ setValue.value && setValue.value.find(data=>(data.language_id.toString() === language ))  ? setValue.value.find(data=>(data.language_id.toString() === language )).detail : null} 
                    onChange={onChange('detail', language)}
                />
                <FormTextArea 
                    maxRows={10}
                    name= "introduction" 
                    placeholder="Enter introduction your company." 
                    setValue={ setValue.value && setValue.value.find(data=>(data.language_id.toString() === language )) ? setValue.value.find(data=>(data.language_id.toString() === language )).introduction :null}  
                    onChange={onChange('introduction', language)}
                />
            </React.Fragment>
        );
    }
}

export default FormAbout
