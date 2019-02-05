import { Modal as AntModal, Button as AntButton, Tabs as AntTabs, Radio as AntRadio } from 'antd'
import styled from 'styled-components'
import {colors} from '../../assets/color'

function checkColor (value) {
    switch(value) {
        case 'primary':
            return colors.primary
        case 'red':
            return colors.red
        case 'brown':
            return colors.brown
        default: 
            return colors.default
      }
}
function checkColorHover (value) {
    switch(value) {
        case 'primary':
            return colors.primaryHover
        case 'red':
            return colors.redHover
        case 'brown':
            return colors.brownHover
        default: 
            return colors.defaultHover 
      }
}
export const Button = styled(AntButton)`
    background-color: ${ props => checkColor(props.type)} !important;
    border-color: ${ props => checkColor(props.type)} !important;
    color: #fff !important;
    font-weight: bold !important;
    &:hover {
        background-color: ${ props => checkColorHover(props.type)} !important;
    }
`
export const Modal = styled(AntModal)`
.ant-modal-header {
  background: ${colors.primary};
  border-radius: 0;
}
.ant-modal-title{
  color: #fff;
  font-weight: bold !important;
}
.ant-modal-footer {
  border-radius: 0;
  border-top:0;
}
.ant-modal-content{
  border-radius: 0;
}
`
export const Tabs = styled(AntTabs)`
.ant-tabs-nav .ant-tabs-tab{
    margin-right: 10px;
    &:hover {
        color: ${colors.primary};
    }
}
.ant-tabs-nav .ant-tabs-tab-active{
    color: ${colors.primary};
}
.ant-tabs-ink-bar {
    background-color: ${colors.primary};
}
`
export const Radio = styled(AntRadio)`
.ant-radio-checked .ant-radio-inner {
    border-color: ${colors.primary};
}
.ant-radio-inner:after {
    background-color: ${colors.primary};
}
`



