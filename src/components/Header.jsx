import { Badge, Box, Divider, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import NotificationIcon from "../icons/NotificationIcon";
import styled from "@emotion/styled";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 20,
    padding: "0 5px",
    backgroundColor: theme.palette.red,
  },
}));

const Header = ({ notifications }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <div>
          <Typography variant="h3" component="h1" fontWeight={400}>
            Welcome
          </Typography>
          <Typography variant="p" color="lightGrey">
            Your current sales auction and activity.
          </Typography>
        </div>

        <IconButton>
          <StyledBadge badgeContent={notifications} color="error">
            <NotificationIcon />
          </StyledBadge>
        </IconButton>
      </Box>

      <Divider />
    </>
  );
};

Header.propTypes = {
  notifications: PropTypes.number,
};

export default Header;
