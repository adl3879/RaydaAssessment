import { Typography } from "@mui/material";
import PropsTypes from "prop-types";
import NotificationIcon from "../icons/NotificationIcon";

const Header = () => {
  return (
    <div>
      <div>
        <Typography variant="h2" component="h2">
          Welcome
        </Typography>
        <Typography variant="p">
          Your current sales auction and activity.
        </Typography>
      </div>
      <div>
        <NotificationIcon />
      </div>
    </div>
  );
};

Header.propsTypes = {
  notifications: PropsTypes.number,
};

export default Header;
