import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { flexbox } from '@material-ui/system';

const Info = ({ cities }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {cities.map((info) => {
                        return (
                            <p key={info.city} className={classes.text}>
                                <span>City: {info.city} </span>
                                <span>Value: {info.value} </span>
                                <span>Parameter: {info.parameter} </span>
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

    }

}));

export default Info;
