import {
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";
import AuctionHeader from "./components/AuctionHeader";
import Button from "./components/Button";
import Header from "./components/Header";
import { useGetAuctionItemsQuery } from "../src/features/api/auctionSlice";
import AuctionCard from "./components/AuctionCard";

function App() {
  const { data: auctionItems, isLoading } = useGetAuctionItemsQuery();

  const AuctionItems = () => {
    return (
      <>
        {(isLoading ? Array.from(new Array(8)) : auctionItems.data).map(
          (item, index) => (
            <Grid key={index} item xs={2} sm={4}>
              {item ? (
                <AuctionCard {...item} />
              ) : (
                <Stack
                  spacing={2}
                  padding="20px"
                  border="1px solid #EAECF0"
                  borderRadius="12px"
                >
                  <Skeleton variant="rectangular" height={140} width="100%" />
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={200}
                    sx={{ borderRadius: "0 0 3px 3px" }}
                  />
                  <Skeleton variant="rectangular" height={40} width="100%" />
                </Stack>
              )}
            </Grid>
          )
        )}
      </>
    );
  };

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

          <Box flex={1} marginY={4}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, lg: 16 }}
            >
              <AuctionItems />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
