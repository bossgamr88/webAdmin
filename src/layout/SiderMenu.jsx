import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

import { routerMenu } from '../router';

//************** Styles  ***************//
import styleLayout from "../assets/styles/layout";
import styleSiderMenu from '../assets/styles/siderMenu'

const { Sider, Header } = Layout;
const { SubMenu } = Menu;

class SiderMenu extends Component {
  render() {
    return (
      <Sider
            trigger={null}
            collapsible
            collapsed={this.props.collapsed}
            width='300'
            // style={{backgroundColor: '#7B5A30'}}
        >
        <Header style={styleLayout.headerBar} >
          <div style={styleSiderMenu.logo}>
            {this.props.collapsed? "PNL": "PARK OF NAILERT"}
            </div>
        </Header>
            <div style={styleSiderMenu.userView} >
              <div></div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
              { routerMenu.map((menu) => (SubMenus(menu))) }
            </Menu>
        </Sider>
    );
  }
}


function SubMenus(menu) {
  if (menu.subMenu) {
    return (
      <SubMenu 
        key={menu.sidebarName} 
        // style={styleSiderMenu.menuItem}
        title={ <Link to={menu.path}><Icon type={menu.icon}/> <span>{menu.sidebarName}</span> </Link>} 
      >
        { menu.subMenu.map((item, key) => ( <Menu.Item key={key} style={styleSiderMenu.menuItem}><Link to={item.path}>{item.sidebarName}</Link></Menu.Item >)) }
      </SubMenu>
    )
  } else {
    return <Menu.Item key={menu.sidebarName} ><Icon type={menu.icon} /> <span>{menu.sidebarName}</span><Link to={menu.path} /></Menu.Item>
  }
}

export default SiderMenu;



