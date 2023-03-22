import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const AuctionCard = ({ name, title, bid, image }) => {
  const getInitialsFromName = () => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <Card
      sx={{
        padding: 3,
        paddingBottom: 0,
        border: "1px solid #D0D5DD",
        boxShadow: "none",
        borderRadius: "12px",
      }}
    >
      <Box>
        <Box bgcolor="grey100" padding={3} borderRadius={3} textAlign="center">
          <img src={image} alt={title} />
        </Box>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ color: "lightGrey", bgcolor: "grey100" }}>
              {getInitialsFromName(name)}
            </Avatar>
            <Typography variant="p" fontWeight={500}>
              {name} <Typography component="span">(Highest Bidder)</Typography>
            </Typography>
          </Box>
          <Typography variant="body1" marginY={2} fontWeight={500}>
            {title}
          </Typography>
          <Typography>
            Current Bid: <Typography component="span">{bid}</Typography>
          </Typography>
          <Box marginY={2}>
            <Divider />
          </Box>
          <Button
            variant="contained"
            disableElevation
            fullWidth
            style={{
              textTransform: "capitalize",
              backgroundColor: "#004CCC",
              padding: 12,
            }}
          >
            Add to wishlist
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

AuctionCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  bid: PropTypes.string,
  image: PropTypes.string,
};

export default AuctionCard;
