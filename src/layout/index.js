import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import SiderMenu from './SiderMenu'
import HeadBarLayout from './HeadBarLayout'
import ContentLayut from './ContentLayut'

// const { Content } = Layout;
export class LayoutScreen extends Component {
    state = {
    collapsed: false,
    };

    toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
    }

    render() {
    return (
        <Layout className='root'>
            <SiderMenu  collapsed={this.state.collapsed} style={{width: "300px"}}/>
        <Layout>
            <HeadBarLayout collapsed={this.state.collapsed} toggle={this.toggle}/>
            <ContentLayut />

            {/* <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
            Content
            </Content> */}
        </Layout>
        </Layout>
    );
    }
}

LayoutScreen.propTypes = {
    name: PropTypes.string
};
export default LayoutScreen
