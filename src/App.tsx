import React, { useEffect, useState } from 'react';
import './App.css';


import {  Button, MenuProps, Select, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Layout, Space } from 'antd';
import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';

const { Header, Footer, Sider, Content } = Layout;


const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  fontSize: '1.5rem'
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 800,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};



function App() {

  const [age, setAge] = React.useState('');
  const [stack, setStack] = useState("flask")

  const handleChange = () => {

  }

  const [d, setD] = useState("");

  console.log(d);

  useEffect(() => {
    fetch(`http://localhost:8000/apis/v1/${stack}`)
    .then(response => response.json())
    .then(res => setD(JSON.stringify(res)))
  }, []);

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%', height: "100%", gap: "0px 0px" }} size={[0, 48]}>
        <Header style={headerStyle}>AriSaf Tech Ltd.</Header>
        {/* dropdown starts here */}
        <div className="flex">
          {/* <FormControl fullWidth>
            <InputLabel id="menu">Age</InputLabel>
            <Select
              labelId="menu"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}

          
        </div>
        {/* dropdown ends here */}
        
        {/* <Content style={contentStyle}>Content</Content> */}
        <Footer style={footerStyle}>Footer</Footer>
      </Space>
      
      {/* <Table columns={columns} dataSource={data} /> */}
    </div>
  );
}

export default App;
