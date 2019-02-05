import React ,{Component} from 'react'
import {Card,Button,Input, Icon,Row, Col} from 'antd'


const CardStyle = {
    cardLogin : {
        height: 300,
        width: 500,
        margin: 'auto',
        // position: 'absolute',
        // top:'25%' ,
        // left: '30%',
        borderStyle: 'none',
        borderRadius: '15px 30px 10px 5px',
        backgroundColor : '#F6E6DD'
        // right:'-50%'
    }
}


const InputStyle = {
    Style : {
        margin:5
    }
}
const CardPosition ={
    Style : {
        padding: '50px 0'
    }
}


const gridStyle = {
    float : 'right',
    // width: '25%',
    height: 300,
    width: 350,
    textAlign: 'center',
    backgroundColor : '#f5f5f5',
    borderStyle: 'none',
    borderRadius: '10px 5px 10px 5px'
    
    
  };

const ButtonLogin = {
    Style : {
        height: 50,
        margin:5,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor : '#745228'
    }
}




class Login extends Component {
    render(){
        return(
          <div className="container">
              <Card style={CardStyle.cardLogin}>
              <Card.Grid style={gridStyle}>
                <div style={CardPosition.Style} >
                <Input placeholder="กรุณากรอก Email" size="large" style={InputStyle.Style}/>
                <Input placeholder="Password" size="large" type="password" style={InputStyle.Style}  />
                <Button size="large" style={ButtonLogin.Style} block>Login</Button>
                </div>
              </Card.Grid>
                </Card>
          </div>
        )
    }
}

export default Login