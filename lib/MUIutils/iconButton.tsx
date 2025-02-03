import { Button } from "@mui/material";
import theme from "./theme";

const IconButton = (props: any) => (
    <Button {...{ ...props, icon: undefined, lightMode: undefined }} variant="contained" sx={{
        backgroundColor: props.lightMode ? '#FFF' : theme.palette.primary[900],
        padding: '8px 20px !important',
        minWidth: 'auto',
        '&:hover': {
            backgroundColor: props.lightMode ? theme.palette.primary['50'] : theme.palette.primary['700'],
            boxShadow: 'none'
        },
        color: props.lightMode ? theme.palette.primary['900'] : '#FFF',
        boxShadow: 'none'
    }}>
        {props.icon}
    </Button >
)

export default IconButton