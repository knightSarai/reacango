import { cloneElement } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });
    return cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}