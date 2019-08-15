import React from 'react'
import Info from './Info'
import styles from '../styles/Dashboard.module.css'

class Dashboard extends React.Component {
    state = {
        cities: '',
        currentCountry: '',
    }
    getInfo = (shortcut) => {
        fetch(`https://api.openaq.org/v1/measurements?country=${shortcut}&parameter=pm25&order_by=value&sort=desc&limit=10000`)
            .then(response => response.json())
            .then(json => this.setState({ cities: json }));
    }
    sortCities = () => {
        let arr = []
        this.state.cities &&
            (arr = this.state.cities.results.map((info, i) => {
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
    onChange = (e) => {
        e.preventDefault()
        this.setState({
            currentCountry: e.target.options[e.target.selectedIndex].text
        })
        this.getInfo(e.target.options[e.target.selectedIndex].text)
    }
    render() {
        const countries = ['BE', 'BA', 'HR', 'CZ', 'FI', 'FR', 'GE',
            'DE', 'HU', 'IE', 'IT', 'XK', 'LT', 'LU', 'MK', 'MT', 'NO', 'PL',
            'PT', 'RS', 'SK', 'ES', 'CH', 'GB']
        return (
            <div className={styles.container}>
                <h3>Select the country</h3>
                <form>
                    <select id="countrySelect" onChange={this.onChange}>
                        {countries.map((country) => {
                            return <option value={country} key={country}>{country}</option>
                        })}
                    </select>
                </form>
                <Info />
                {this.sortCities().map((info) => {
                    return (
                        <>
                            <p>
                                <span>City: {info.city} </span>
                                <span>Value: {info.value} </span>
                                <span>Parameter: {info.parameter} </span>
                            </p>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Dashboard;
