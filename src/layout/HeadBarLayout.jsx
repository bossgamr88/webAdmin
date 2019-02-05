import React, { Component } from 'react'
import { Layout, Icon } from 'antd'

import styleLayout from '../assets/styles/layout'

const { Header } = Layout;
export class HeadBarLayout extends Component {
  render() {
    return (
        <Header style={styleLayout.headerBar}>
        <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={()=>this.props.toggle()}
        />
        </Header>
    )
  }
}

export default HeadBarLayout
