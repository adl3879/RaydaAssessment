import { Box, Chip, Typography } from "@mui/material";
import Gradient from "../assets/gradient.png";
import Profile from "../assets/content.png";
import DotIcon from "../icons/Dot";
import Like from "../icons/Like";
import Button from "./Button";

function AuctionHeader() {
  return (
    <Box paddingY="20px">
      <Box
        sx={{
          padding: "24px",
          border: "1px solid #EAECF0",
          borderRadius: "12px",
          boxShadow:
            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        }}
      >
        <Box
          bgcolor="cadetblue"
          height={192}
          sx={{
            backgroundImage: `url(${Gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 3,
          }}
        ></Box>
        <Box display="flex" padding="16px" gap={2} position="relative">
          <Box sx={{ flexBasis: "12%" }}>
            <img
              style={{ position: "absolute", top: -50 }}
              src={Profile}
              alt="profile"
            />
          </Box>

          <Box flex={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <Typography variant="h4">
                Starts in: 3 days : 2 hours : 24 minutes{" "}
              </Typography>

              <Button
                label="Accept Invite"
                variant="outlined"
                startIcon={<Like />}
              />
            </Box>
            <Box>
              <Chip
                icon={<DotIcon />}
                style={{
                  color: "#B54708",
                  backgroundColor: "#FFFAEB",
                  fontSize: 14,
                  padding: 2,
                  fontWeight: 500,
                }}
                label="Not Live"
              />
              <Typography color="lightGrey" variant="p" ml={2}>
                Layers Auction
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AuctionHeader;
