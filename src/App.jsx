import { Box, Container, Divider, Typography } from "@mui/material";
import AuctionHeader from "./components/AuctionHeader";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <Container maxWidth={1600}>
      <Header notifications={2} />
      <AuctionHeader />
      <Box
        sx={{
          padding: "24px",
          border: "1px solid #EAECF0",
          borderRadius: "12px",
          boxShadow:
            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        }}
      >
        <Box>
          <Box display="flex" justifyContent="space-between" mb="20px">
            <Typography variant="h6" component="h2" fontWeight={500}>
              Featured Items
            </Typography>
            <Button label="View Auction" variant="outlined" />
          </Box>

          <Divider />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
