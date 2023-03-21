import { Box, Chip, Typography } from "@mui/material";
import Gradient from "../assets/gradient.png";
import Profile from "../assets/content.png";
import DotIcon from "../icons/Dot";
import Like from "../icons/Like";
import Button from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function AuctionHeader() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
          height={192}
          sx={{
            backgroundImage: `url(${Gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 3,
          }}
        ></Box>
        <Box display="flex" padding="16px" position="relative" flexWrap="wrap">
          <Box flexBasis={matches ? "10%" : "20%"}>
            <Box position="absolute" top={-50}>
              <img
                src={Profile}
                alt="profile"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>

          <Box flex={1}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <Typography variant="h5" fontWeight={500}>
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
