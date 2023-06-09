import styled from "@emotion/styled";
import { Button as MUIButton } from "@mui/material";
import PropTypes from "prop-types";

const StyledButton = styled(MUIButton)(({ theme }) => ({
  color: theme.palette.lightGrey,
  borderColor: theme.palette.btnBorderGrey,
  textTransform: "capitalize",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: theme.palette.btnBorderGrey,
  },
}));

const Button = ({ label, variant, startIcon, sx, onClick }) => (
  <StyledButton
    {...{ variant, startIcon, onClick, sx: { ...sx, fontWeight: 600 } }}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  startIcon: PropTypes.element,
  sx: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
