import React from 'react'
import Header from './Header'
import Info from './Info'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Dashboard = () => {
    const [values, setValues] = React.useState({
        cities: '',
        currentCountry: '',
    });

    const getInfo = (shortcut) => {
        fetch(`https://api.openaq.org/v1/measurements?country=${shortcut}&parameter=pm25&order_by=value&sort=desc&limit=10000`)
            .then(response => response.json())
            .then(json => setValues({ cities: json }));
    }

    const sortCities = () => {
        let arr = []
        values.cities &&
            (arr = values.cities.results.map((info, i) => {
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

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
        getInfo(event.target.value)
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
            label: 'BA',
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
            label: 'FI',
        },
        {
            value: 'FR',
            label: 'France',
        },
        {
            value: 'GE',
            label: 'GE',
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
            label: 'PT',
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
            label: 'CH',
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
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Select"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currentCountry')}
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
                            backgroundColor: "#39a83b",
                        }}
                        variant="contained"
                        color="primary"
                        className={classes.btnPosition}
                        type="submit"
                        label="Select"
                        onSubmit={handleChange('currentCountry')}
                    >
                        Sumbit
                </Button>
                </div>
            </div>
            <Info cities={sortCities()} />
        </>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
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
