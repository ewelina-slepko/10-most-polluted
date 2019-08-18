import React from 'react'
import Header from './Header'
import Info from './Info'
import Intro from './Intro'
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Dashboard = () => {
    const [cities, setCities] = React.useState([]);

    const [country, setCountry] = React.useState('');

    const getInfo = shortcut => (e) => {
        e.preventDefault();
        fetch(`https://api.openaq.org/v1/measurements?country=${shortcut}&parameter=pm25&order_by=value&sort=desc&limit=10000`)
            .then(response => response.json())
            .then(json => setCities(json.results));
    }

    const sortCities = () => {
        let arr = []
        cities.length > 0 &&
            (arr = cities.map((info, i) => {
                return ({
                    'city': info.city, 'value': info.value, 'parameter': info.parameter
                })
            }))
        const keys = ['city']
        const filtered = arr.filter(
            (s => o =>
                (k => !s.has(k) && s.add(k))(keys.map(k => o[k]).join('|'))
            )(new Set())
        );
        return filtered.splice(0, 10)
    }

    const handleChange = event => {
        setCountry(event.target.value);
    };

    const classes = useStyles();
    const countries = [
        {
            value: '',
            label: '',
        },
        {
            value: 'BE',
            label: 'Belgium',
        },
        {
            value: 'BA',
            label: 'Bosnia and Herzegovina',
        },
        {
            value: 'HR',
            label: 'Croatia',
        },
        {
            value: 'CZ',
            label: 'Czechia',
        },
        {
            value: 'FI',
            label: 'Finland',
        },
        {
            value: 'FR',
            label: 'France',
        },
        {
            value: 'DE',
            label: 'Germany',
        },
        {
            value: 'HU',
            label: 'Hungary',
        },
        {
            value: 'IE',
            label: 'Ireland',
        },
        {
            value: 'IT',
            label: 'Italy',
        },
        {
            value: 'XK',
            label: 'Kosowo',
        },
        {
            value: 'LT',
            label: 'Lithuania',
        },
        {
            value: 'LU',
            label: 'Luxembourg',
        },
        {
            value: 'MK',
            label: 'North Macedonia',
        },
        {
            value: 'MT',
            label: 'Malta',
        },
        {
            value: 'NO',
            label: 'Norway',
        },
        {
            value: 'PL',
            label: 'Poland',
        },
        {
            value: 'PT',
            label: 'Portugal',
        },
        {
            value: 'RS',
            label: 'Serbia',
        },
        {
            value: 'SK',
            label: 'Slovakia',
        },
        {
            value: 'ES',
            label: 'Spain',
        },
        {
            value: 'CH',
            label: 'Switzerland',
        },
        {
            value: 'GB',
            label: 'Great Britain',
        },
    ]
    return (
        <>
            <Header />
            <div className={classes.container}>
                <form className={classes.container} onSubmit={getInfo(country)} noValidate>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Select"
                        className={classes.textField}
                        value={country}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select country"
                        margin="normal"
                        variant="outlined"
                    >
                        {countries.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <div className={classes.btnWrapper}>
                        <Button
                            style={{
                                backgroundColor: "#0d4ea8",
                                padding: "8px 30px"
                            }}
                            variant="contained"
                            color="primary"
                            className={classes.btnPosition}
                            type="submit"
                            label="Select"

                        >
                            Sumbit
                    </Button>
                    </div>
                </form>
            </div>
            {cities.length > 0 ? <Info cities={sortCities()} /> : <Intro />}
            <Footer />
        </>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: 10
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    btnWrapper: {
        marginTop: 20
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));


export default Dashboard;
