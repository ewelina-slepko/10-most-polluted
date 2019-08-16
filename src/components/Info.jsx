import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { flexbox } from '@material-ui/system';

const Info = ({ cities }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {cities.map((info, i) => {
                        return (
                            <p key={info.city} className={classes.text}>

                                <p>{i + 1}. <span className={classes.city}>{info.city}:</span> {info.value} {info.parameter}</p>
                            </p>
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
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1,
        maxWidth: 400
    },
    text: {
        color: '#4d4d4d'
    },
    city: {
        fontSize: '1.4rem',
        padding: '4px 6px'
    }

}));

export default Info;
