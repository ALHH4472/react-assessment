import React from 'react';
import { ThemeConfig } from 'antd';

// theme configuration for library components
const theme: ThemeConfig = {
    token: {
      colorPrimary: '#28C2D1',
      colorTextBase: '#21062C',
      colorLink: '#21062C'
    },
    components: {
        Button: {
            defaultBg:'#DDF0F2',
            defaultColor: '#01c2d2'
        },
        Table:{
            headerColor: '#333333',
            rowHoverBg: '#CEFEE8',
            footerColor: '#4A4A4A',
            colorText: '#4A4A4A'
        }
    },

  };


export default theme;