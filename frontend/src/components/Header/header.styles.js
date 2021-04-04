import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: "none",
        width: "100%",
        background: 'rgba(255, 255, 255, 0.95)',
        '& .active': {
            color: theme.palette.primary.dark
        }
    },
    toolbar: {
        color: "#ffff",
        width: theme.container.maxWidth,
        padding: "1rem 0",
        margin: "auto"
    },
}));

export default useStyles;