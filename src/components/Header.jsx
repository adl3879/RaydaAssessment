import styled from "@emotion/styled";
import { Badge, Box, Divider, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import NotificationIcon from "../icons/NotificationIcon";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 20,
    padding: "0 5px",
    backgroundColor: theme.palette.red,
    color: "white",
  },
}));

const Header = ({ notifications }) => {
  return (
    <>
      <Box paddingBottom={2} display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h3" component="h1" fontWeight={400}>
            Welcome
          </Typography>
          <Typography variant="p" color="lightGrey">
            Your current sales auction and activity.
          </Typography>
        </Box>

        <IconButton>
          <StyledBadge badgeContent={notifications}>
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
