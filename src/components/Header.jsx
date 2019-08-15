import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../components/images/industrial.jpg'
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
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        opacity: '0.6'
    },
    backgroundMobile: {
        backgroundPosition: '-200px'
    },
    header: {
        flex: 1,
        padding: 10,
        margin: 30,
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1,
        textAlign: 'center',
        maxWidth: 500,
        borderRadius: 20
    }
}));

export default Header;
