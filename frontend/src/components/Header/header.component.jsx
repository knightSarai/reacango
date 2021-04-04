import React from 'react';
/**MUI COMPONENT */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
/**Custom  Components*/
import useStyles from './header.styles';
import { ElevationScroll } from './util';

export default function Header({ links }) {

    const classes = useStyles();

    const Links = (
        links.map(({ path, title }) => (
            <Link style={{ marginLeft: "1rem" }} href={path} as="a"> {title}</Link>
        ))
    );

    return (
        <ElevationScroll>
            <AppBar className={classes.appBar} color="transparent" elevation={5}>
                <Toolbar className={classes.toolbar} disableGutters>
                    {Links}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}
