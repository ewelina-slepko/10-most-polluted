import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from './images/pollution.jpg'

const Intro = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1 className={classes.headerWrapper}>Smog is unnatural atmospheric phenomenon, which it is in the coexistence of chemical
                    compounds and dust in our atmosphere. These substances threatens our health and our lives. </h1>
            </div>
            <div className={classes.wrapper}>
                <img src={logo} className={classes.image} alt="Logo" />
            </div>
            <div className={classes.wrapper}>
                <p className={classes.textWrapper}>PM2.5 particles are small enough to be breathed deep into the lungs. This can cause health effects.
                    Children, people over 65, pregnant women and people with existing heart or lung conditions (including asthma)
                    are more sensitive to the effects of breathing in fine particles. Symptoms may include wheezing,
                    chest tightness and difficulty breathing.
                </p>
                <p className={classes.textWrapper}>PM2.5 particles result from the burning of fossil fuels (such as coal), organic matter (including wood and grass)
                    and most other materials, such as rubber and plastic. Motor vehicles, power plant emissions and bushfires
                    are all major sources of fine particles.</p>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: 50
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 20,
        padding: '10px 0',
        justifyContent: 'center',
        color: '#3b3b3b',
        letterSpacing: 1,
    },
    headerWrapper: {
        maxWidth: 800
    },
    textWrapper: {
        maxWidth: 800,
        lineHeight: 2
    },
    image: {
        width: '26rem',
        height: '18rem',
        opacity: '0.7',
        lineHeight: 2
    }
}));

export default Intro;
