import React, { useEffect, useState } from 'react';
import './App.css';

import JsPDF from 'jspdf';

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
  height: "150px"
};


function App() {

  const [stack, setStack] = useState("django")

  const [d, setD] = useState("");

  console.log(d);

  useEffect(() => {
    fetch(`http://localhost:7000/apis/v1/${stack}`,
      {
        method: "GET",
        headers: new Headers({
          'Authorization': 'Basic '+btoa(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`), 
          'Content-Type': 'application/x-www-form-urlencoded'
        }
        )
      }

    )
    .then(response => response.json())
    .then(res => setD(JSON.stringify(res)))
  }, []);

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%', height: "100%", gap: "0px 0px" }} size={[0, 48]}>
        <Header style={headerStyle}>AriSaf Tech Ltd.</Header>
        {/* dropdown starts here */}
        <div style={{ display: "flex", gap: "50px" }}>
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

          <div>dropdown</div>
          <div>dropdown</div>
          <div>dropdown</div>
          <div>dropdown</div>

          
        </div>
        {/* dropdown ends here */}


        <div>
         table
        </div>
        
        {/* <Content style={contentStyle}>Content</Content> */}
        <Footer style={footerStyle}>Information about the company</Footer>
      </Space>
      
      {/* <Table columns={columns} dataSource={data} /> */}
    </div>
  );
}

export default App;
