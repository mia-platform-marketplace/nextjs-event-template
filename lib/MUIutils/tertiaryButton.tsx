import { Button } from "@mui/material";
import theme from "./theme";

const TertiaryButton = (props: any) => (
  <Button {...{ ...props, fitAvailable: undefined }} variant="contained" sx={{
    backgroundColor: '#FFFFFF',
    color: theme.palette.primary[800],
    border: 'none',
    boxShadow: 'none',
    width: props.fitAvailable ? '100%' : 'auto',
    '&: hover': {
      backgroundColor: theme.palette.primary['50'],
      border: 'none',
      boxShadow: 'none',
    }
  }}>
    {props.children}
  </Button >
)

export default TertiaryButton