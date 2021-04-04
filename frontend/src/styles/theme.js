import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const celtisMain = '#66bfbf';
const celtisSec = '#fcea90';

let theme = createMuiTheme({
    palette: {
        common: {
            ment: `${celtisMain}`,
            yellow: `${celtisSec}`,
            appBar: 'rgba(211, 237, 234, 0.95)',
            red: "#e08270"
        },
        primary: {
            main: `${celtisMain}`,
        },
        secondary: {
            main: `${celtisSec}`
        },
        light: {
            main: `#b9e1dc`
        },
        titleDark: {
            main: "#4C4C4C"
        }
    },
    container :{
        maxWidth: "67%"
    },
    typography: {
        fontSize: 11,
      },
      shrinkLabel: (value, color) => {
        return value ? {
            top: "-24px",
            fontSize: "18px",
            color: color,
        } : {}
        
        
    }
});

export default responsiveFontSizes(theme);