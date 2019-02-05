import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Icon, Col} from 'antd';

class FormAbout extends Component {
    
    emitEmpty = () => {
        this.valueInputInput.focus();
        this.props.onChange({target: {value: ""}})
    }



    render() {
        const { name, icon, placeholder, suffix, addonBeforeName, spanBottom, setValue, onChange } = this.props
        const suffixIcon = setValue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : setValue;
        return (
            <React.Fragment>
                <div>
                    <Col span={6}>
                        <div style={{ minHeight: 30, paddingRight: 10, justifyContent: 'flex-end' ,alignItems: 'center', display: 'flex'}}>{`${name} :`}</div>
                    </Col>
                    <Col span={18}>
                        <Input
                            value={setValue}
                            onChange={onChange}
                            suffix={suffix ? suffixIcon : null}
                            placeholder= {placeholder ? placeholder : null}
                            ref={suffix ? node => this.valueInputInput = node : null}
                            prefix={icon ? <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} /> : null}
                            addonBefore= {addonBeforeName ? addonBeforeName : null}
                        />
                    </Col>
                </div>
                {Array.from({ length: spanBottom }, (v, k) => <br key={k} />)}
            </React.Fragment>
        );
    }
}
FormAbout.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    suffix: PropTypes.bool,
    onClick: PropTypes.func,
    spanBottom: PropTypes.number,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    addonBeforeName: PropTypes.string,

};
FormAbout.defaultProps = {
    // icon: 'user',
    spanBottom: 2,
    suffix: false,
    placeholder: 'Enter your value.',
    onClick: ()=>console.log('ใส่ฟังชั้น onClick'),
    onChange: ()=>console.log('ใส่ฟังชั้น onChange เพื่อดึงค่าข้อมูล'),
  };

export default FormAbout
