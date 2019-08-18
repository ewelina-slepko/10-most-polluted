import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../components/images/industrial.jpg'
import clsx from 'clsx'


const Header = () => {
    const classes = useStyles();
    return (
        <div className={window.innerWidth < 992 ? clsx(classes.background, classes.backgroundMobile) : classes.background}>
            <div className={window.innerWidth < 992 ? classes.header : clsx(classes.header, classes.headerMargin)}>
                <h1 className={classes.headerText}>Air Pollution</h1>
                <h2 className={classes.text}>The most polutted cities in the country</h2>
            </div>
        </div>
    )
}
const useStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        alignItems: 'flex-start',
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
        margin: '40px',
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1,
        textAlign: 'center',
        maxWidth: 500,
        borderRadius: 3,
        fontFamily: 'Montserrat, sans-serif'
    },
    headerMargin: {
        margin: '80px',
    },
    headerText: {
        fontSize: '2.6rem',
        margin: 0
    },
    text: {
        fontSize: '.8rem'
    }

}));

export default Header;
