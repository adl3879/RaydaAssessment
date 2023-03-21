import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const AuctionCard = ({ name, title, bid, image }) => {
  const getInitialsFromName = () => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join(".");
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        padding: "24px",
        border: "1px solid #EAECF0",
        borderRadius: "12px",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
          {...{ image }}
        />
        <CardContent>
          <Box display="flex" gap={2}>
            <Avatar>{getInitialsFromName(name)}</Avatar>
            <Typography variant="p" fontWeight={500}>
              {name}
              <Typography>(Highest Bidder)</Typography>
            </Typography>
          </Box>
          <Typography variant="h6">{title}</Typography>
          <Typography>
            Current Bid: <Typography>{bid}</Typography>
          </Typography>
          <Divider />
          <Button color="primary">Add to wishlist</Button>
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
