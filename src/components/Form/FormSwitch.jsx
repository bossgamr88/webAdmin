import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Row, Col ,Switch, Icon  } from 'antd';

export default class FormSwitch extends Component {
  render() {
      const { name, onChange, setValue} = this.props
    return (
        <Row style={{display: 'flex',alignItems: 'center'}}>
        <Col span={16}>
            <div style={{ minHeight: 30, paddingRight: 10, justifyContent: 'flex-end' ,alignItems: 'center', display: 'flex'}}>{`${name} :`}</div>
        </Col>
        <Col span={8}>
            <Switch 
            defaultChecked  
            checked={setValue === 'y' ? true : false}
            checkedChildren={<Icon type="check" />} 
            unCheckedChildren={<Icon type="close" />} 
            onChange={onChange} />        
        </Col>
        </Row>
    )
  }
}

FormSwitch.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
};
FormSwitch.defaultProps = {
    name: "",
    onChange: (v)=> console.log('onChange', v),
  };
