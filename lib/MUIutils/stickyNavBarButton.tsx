import { Button } from "@mui/material";
import theme from "./theme";

const StickyNavBarButton = (props: any) => (
    <Button {...props} variant="contained" sx={{
        backgroundColor: 'transparent',
        color: theme.palette.grey['600'],
        border: 'none',
        boxShadow: 'none',
        padding: '8px 20px',
        '&: hover': {
            backgroundColor: theme.palette.primary['50'],
            color: theme.palette.grey['600'],
            border: 'none',
            boxShadow: 'none',
        }
    }}>
        {props.children}
    </Button >
)

export default StickyNavBarButton