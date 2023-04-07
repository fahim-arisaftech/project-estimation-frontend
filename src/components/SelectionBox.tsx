import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const SelectionBox = () => {

    const [stack, setStack] = useState("django");

    const handleChange = (event: SelectChangeEvent) => {
        setStack(event.target.value as string);
    };

    return(
        <Box
      sx={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        paddingInline:"30px"
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
            onChange={handleChange}
          >
            <MenuItem value={"PHP"}>PHP</MenuItem>
            <MenuItem value={"WordPress"}>WordPress</MenuItem>
            <MenuItem value={"Django"}>Django</MenuItem>
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
            onChange={handleChange}
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
            onChange={handleChange}
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
          <InputLabel id="demo-simple-select-label">Mobile Application</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stack}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"nativeandroid"}>Native Android</MenuItem>
            <MenuItem value={"nativeios"}>Native iOS</MenuItem>
            <MenuItem value={"flutter"}>Flutter</MenuItem>
            <MenuItem value={"reactnative"}>React Native</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
    );
}

export default SelectionBox;