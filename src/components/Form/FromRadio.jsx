import React from 'react'
import { Row, Col,  } from 'antd';
import PropTypes from 'prop-types'

import { Radio } from './CustomForm'
const RadioGroup = Radio.Group;
export default class FromRadio extends React.Component {
  render() {
      const { name, spanBottom, setValue, onChange } = this.props
    return (
        <React.Fragment>
            <Row style={{display: 'flex',alignItems: 'center'}}>
                <Col span={6}>
                    <div style={{ minHeight: 30, paddingRight: 10, justifyContent: 'flex-end' ,alignItems: 'center', display: 'flex'}}>{`${name} :`}</div>
                </Col>
                <Col span={18} >
                    <RadioGroup onChange={onChange} value={setValue||null} >
                        <Radio value='n'>No</Radio>
                        <Radio value='y'>Yes</Radio>
                    </RadioGroup>
                </Col>
            </Row>
            {Array.from({ length: spanBottom }, (v, k) => <br key={k} />)}
        </React.Fragment>
    );
  }
}

FromRadio.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    spanBottom: PropTypes.number,
    onChange: PropTypes.func,
};

FromRadio.defaultProps = {
    name:"",
    value: "n",
    spanBottom: 2,
    onChange: (e)=> console.log('กรุณาใส่ฟังชั่น onChange',e)
  };
