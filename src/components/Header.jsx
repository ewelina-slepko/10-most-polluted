import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../components/images/industrial.png'
import clsx from 'clsx'


const Header = () => {
    const classes = useStyles();
    return (
        <div className={window.innerWidth < 992 ? clsx(classes.background, classes.backgroundMobile) : classes.background}>
            <h1 className={classes.header}>The most polluted cities</h1>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        opacity: '0.8'
    },
    backgroundMobile: {
        backgroundPosition: '-200px'
    },
    header: {
        flex: 1,
        margin: 30,
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1,
        textAlign: 'center',
        maxWidth: 500,
        borderRadius: 3,
    }
}));

export default Header;
