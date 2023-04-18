import React, { useEffect, useState } from "react";

import JsPDF, { jsPDF } from "jspdf";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import SelectionBox from "./components/SelectionBox";
import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState("");

  const [data, setData] = useState<any[]>([]);

  const handleFullStackChange = (event: SelectChangeEvent) => {
    setStack(event.target.value as string);
  };

  const handleAPIChange = (event: SelectChangeEvent) => {
    setStack(event.target.value as string);
  };

  const handleFrontendChange = (event: SelectChangeEvent) => {
    setStack(event.target.value as string);
  };

  const handleMobileAppChange = (event: SelectChangeEvent) => {
    setStack(event.target.value as string);
  };

  console.log(data);

  const tableData = (data: any) => {
    for (var i = 0; i < data.length; i++) {
      return `${data[i].feature} and ${data[i].estimation}`;
    }
  };

  const handlePDFDownload = () => {
    const doc = new jsPDF("p", "pt", "a4");
    var pageHeight =
      doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var pageWidth =
      doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    var elementHTML = document.querySelector("#table") as HTMLElement;
    doc.html(elementHTML, {
      callback: function (doc) {
        doc.addImage("./img/ast.png", "JPEG", 20, 20, 20, 20);
        // doc.addImage("https://promo.bradbrownmagic.com/pdf-flyer/flyers/poster-dark-cmyk.jpg","JPEG",10,10,10,10);
        // doc.textWithLink("AriSaf Tech Ltd.", 100, 100, "");
        doc.setTextColor("blue");
        doc.textWithLink("AriSaf Tech Ltd.", pageWidth - 50, 40, {
          align: "right",
        });
        // doc.text("contact us", pageWidth / 2, 100);
        doc.setFillColor("white");
        // Save the PDF
        doc.save(`${stack}-estimation.pdf`);
      },
      x: 100,
      y: 100,
      width: 370, //target width in the PDF document
      windowWidth: 650, //window width in CSS pixels
    });
  };

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://5.189.160.223:8000/apis/v1/${stack}`, {
          method: "GET",
          headers: new Headers({
            Authorization:
              "Basic " +
              btoa(
                `${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`
              ),
            "Content-Type": "application/x-www-form-urlencoded",
            // "X-CSRFToken": csrftoken,
          }),
        })
      ).json();
      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, [stack]);

  const DisplayData = data.map((info) => {
    return (
      <tr>
        <td
          style={{
            border: "1px solid #dddddd",
            textAlign: "center",
            padding: "8px",
          }}
        >
          {info.id}
        </td>
        <td
          style={{
            border: "1px solid #dddddd",
            textAlign: "center",
            padding: "8px",
          }}
        >
          {info.feature}
        </td>
        <td
          style={{
            border: "1px solid #dddddd",
            textAlign: "center",
            padding: "8px",
          }}
        >
          {info.estimation}
        </td>
      </tr>
    );
  });

  return (
    <Box className="">
      <Navbar />
      {/* <SelectionBox /> */}
      <div>
        <Box
          sx={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            paddingInline: "30px",
          }}
        >
          <Box sx={{ width: "250px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FullStack</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stack}
                label="Age"
                onChange={handleFullStackChange}
              >
                <MenuItem value={"php"}>PHP</MenuItem>
                <MenuItem value={"wordpress"}>WordPress</MenuItem>
                <MenuItem value={"django"}>Django</MenuItem>
                <MenuItem value={"dotnet"}>.NET</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "250px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">API</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stack}
                label="Age"
                onChange={handleAPIChange}
              >
                <MenuItem value={"springboot"}>Spring Boot</MenuItem>
                <MenuItem value={"fastapi"}>FastAPI</MenuItem>
                <MenuItem value={"flask"}>Flask</MenuItem>
                <MenuItem value={"node"}>Node</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "250px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Frontend</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stack}
                label="Age"
                onChange={handleFrontendChange}
              >
                <MenuItem value={"react"}>React</MenuItem>
                <MenuItem value={"vue"}>Vue</MenuItem>
                <MenuItem value={"angular"}>Angular</MenuItem>
                <MenuItem value={"nextjs"}>NextJS</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "250px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Mobile Application
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stack}
                label="Age"
                onChange={handleMobileAppChange}
              >
                <MenuItem value={"nativeandroid"}>Native Android</MenuItem>
                <MenuItem value={"nativeios"}>Native iOS</MenuItem>
                <MenuItem value={"flutter"}>Flutter</MenuItem>
                <MenuItem value={"reactnative"}>React Native</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </div>

      {data.length < 1 && (
        <h1 style={{ textAlign: "center" }}>
          見積もりを概説するには、スタックを選択してください
        </h1>
      )}

      {data.length > 1 && (
        <div
          id="table"
          style={{ display: "flex", width:"80%",justifyContent: "center", height: "40vh",overflowY:"scroll",marginBottom:"3.5vh",margin:"0 auto" }}
        >
          <table
            className="table table-striped"
            style={{
              fontFamily: "arial, sans-serif",
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "40px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  No.
                </th>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "center",
                    padding: "8px",
                  }}
                >
                  Estimation(m/h)
                </th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      )}
      {/* <div id="content">
        <DataTable />
      </div> */}

      {data.length > 1 && (
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" onClick={handlePDFDownload}>
            {stack} 推定のダウンロード
          </Button>
        </div>
      )}

      <Footer />
    </Box>
  );
}

export default App;
