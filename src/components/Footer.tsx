import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#1976d2",
        paddingInline: "30px",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "50px",
        paddingBlock: "30px",
        color: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxSizing:"border-box",
        overflowX:"hidden"
        
      }}
    >
      <Box>
        <img
          src="./img/ast.png"
          alt=""
          style={{ width: "50px", marginTop: "10px" }}
        />
        <p>Committed to society, Committed to the future</p>
      </Box>
      <Box>
        <h3>JAPAPN OFFICE</h3>
      </Box>
      <Box>
        <h3>BANGLADESH OFFICE</h3>
      </Box>
    </Box>
  );
};

export default Footer;
