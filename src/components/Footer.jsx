import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { flexbox } from '@material-ui/system';

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <p>All graphics are designed by Freepik.</p>
            </div>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontSize: '.8rem'
    },
}));

export default Footer;
