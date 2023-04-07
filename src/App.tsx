import React, { useEffect, useState } from 'react';
import './App.css';

import JsPDF, { jsPDF } from 'jspdf';

// import { Layout, Space } from 'antd';
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable';
import SelectionBox from './components/SelectionBox';
import Footer from './components/Footer';

// const { Header, Footer, Sider, Content } = Layout;


// const headerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 50,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
//   fontSize: '1.5rem'
// };

// const contentStyle: React.CSSProperties = {
//   textAlign: 'center',
//   minHeight: 800,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
// };

// const footerStyle: React.CSSProperties = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#7dbcea',
//   height: "150px"
// };


function App() {

  const [stack, setStack] = useState("")

  const [data, setData] = useState("");

  console.log(data);


  const tableData = (data:any) => {
    for(var i = 0; i < data.length; i++) {
      return `${data[i].feature} and ${data[i].estimation}`;
    }
  }

  const handlePDFDownload = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    var elementHTML = document.querySelector("#content") as HTMLElement;
    doc.html(elementHTML, {
      callback: function(doc) {
          // doc.addImage("./images/logo.png", "JPEG", 10, 10, 10, 10);
          // doc.addImage("https://promo.bradbrownmagic.com/pdf-flyer/flyers/poster-dark-cmyk.jpg","JPEG",10,10,10,10);
          doc.textWithLink("AriSaf Tech Ltd.", 100, 100, "");
          doc.setTextColor("blue");
          doc.textWithLink('AriSaf Tech Ltd.', pageWidth - 50, pageHeight - 20, {align: "right"});
          doc.text("contact us", pageWidth / 2, 100);
          doc.setFillColor("white");
          // Save the PDF
          doc.save('sample-document.pdf');
      },
      x: 100,
      y: 100,
      width: 370, //target width in the PDF document
      windowWidth: 650 //window width in CSS pixels
  });
  }

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://localhost:8000/apis/v1/${stack}`,
          {
            method: "GET",
            headers: new Headers({
              'Authorization': 'Basic '+btoa(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`), 
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          }
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <Box className="">
      <Navbar />
      <SelectionBox />
      <div id="content">
        <DataTable />
      </div>
      <Button variant="contained" onClick={handlePDFDownload}>Download PDF</Button>
      <Footer/>
    </Box>
  );
}

export default App;
