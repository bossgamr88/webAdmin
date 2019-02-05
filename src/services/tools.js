import { notification } from 'antd';

export const convertValueTrueFalse = (value)=>{
    if (typeof value === 'string') return value
    else return value ? 'y' : 'n'
  }
  export  const openNotification = (type,message="" ,description="") => {
    notification[type]({
      message,
      description,
    });
  };