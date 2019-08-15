import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../components/images/industrial.jpg'
import clsx from 'clsx'

const Header = () => {
    const classes = useStyles();
    return (
        <div className={window.innerWidth < 992 ? clsx(classes.background, classes.backgroundMobile) : classes.background}>
            <h1 className={classes.header}>Air Pollution</h1>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    containerCenter: {
        margin: '0 auto',
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '130px 50px',

    },
    containerRight: {
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        paddingTop: 100,
        margin: '0px 300px 0px auto'
    },
    background: {
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        opacity: '0.6'
    },
    backgroundMobile: {
        backgroundPosition: '-200px'
    },
    header: {
        margin: 0,
        padding: 0
    }
}));

export default Header;
