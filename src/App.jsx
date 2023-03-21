import { Box, Container } from "@mui/material";
import AuctionHeader from "./components/AuctionHeader";
import Header from "./components/Header";

function App() {
  return (
    <Container maxWidth={1600}>
      <Header notifications={2} />
      <AuctionHeader />
    </Container>
  );
}

export default App;
