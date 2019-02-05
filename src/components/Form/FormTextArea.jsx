import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Col} from 'antd';

const { TextArea } = Input

class FormAbout extends Component {
    
    render() {
        const { name, placeholder, minRows, maxRows, spanBottom, setValue, onChange } = this.props
        return (
            <React.Fragment>
                <div>
                    <Col span={6}>
                        <div style={{ minHeight: 30, paddingRight: 10, justifyContent: 'flex-end' ,alignItems: 'center', display: 'flex'}}>{`${name} :`}</div>
                    </Col>
                    <Col span={18}>
                        <TextArea
                            value={ setValue }
                            onChange={ onChange }
                            placeholder= { placeholder ? placeholder : null }
                            autosize={ { minRows, maxRows } }
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
    minRows: PropTypes.number,
    maxRows: PropTypes.number,
    spanBottom: PropTypes.number,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,

};
FormAbout.defaultProps = {
    minRows: 5, 
    maxRows: 15,
    spanBottom: 6,
    placeholder: 'Enter your value.',
    onChange: ()=>console.log('ใส่ฟังชั้น onChange เพื่อดึงค่าข้อมูล'),
  };

export default FormAbout
