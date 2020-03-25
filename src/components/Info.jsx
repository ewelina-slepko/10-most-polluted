import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const Info = ({ cities }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <div className={window.innerWidth > 992 ? clsx(classes.wrapper, classes.wrapperMargin) : classes.wrapper}>
                    {cities.map((info, i) => {
                        return (
                            <div key={info.city} className={classes.text}>
                                <p className={classes.city}>{info.city}</p>
                                <p className={classes.value}>{info.value} {info.parameter}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        margin: 20,
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        color: '#4d4d4d',
        paddingBottom: 60
    },
    wrapperMargin: {
        margin: '20px 300px'
    },
    text: {
        flex: 1,
        padding: '20px 50px',
        margin: '10px',
        backgroundColor: '#edf1fa',
        borderRadius: 20,
        whiteSpace: 'nowrap',
        maxWidth: 330,
        textAlign: 'center',
        "&:hover": {
            opacity: '.9'
        },
    },
    city: {
        fontSize: '1.4rem',
        margin: 0,
        padding: 0
    },
    value: {
        fontSize: '0.8rem',
        color: '#a32018',
        margin: 0,
        padding: 0
    }

}));

export default Info;
