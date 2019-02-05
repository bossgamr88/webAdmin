import React, { Component } from 'react';

import { Layout } from 'antd';
import { Route, Switch  } from "react-router-dom";

import { routerMenu } from '../router';

const { Content } = Layout;
class ContentLayut extends Component {
  render() {
    return (
        <Content className="content" style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
              <Switch>
                  {
                      routerMenu.map((router, key)=>(
                        RoutComponent(router, key)
                      ))
                  }
              </Switch>
        </Content>
    );
  }
}


function RoutComponent(router, key){
    if(router.subMenu){
        return (
            router.subMenu.map((routerItem)=>(
                <Route exact path={routerItem.path} component={routerItem.component} key={key}/>
            ))
        )
    } else {
        return <Route exact path={router.path} component={router.component} key={key}/>
    }
}
export default ContentLayut;
