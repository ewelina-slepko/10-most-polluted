import React from 'react'
import Info from './Info'
import styles from '../styles/Dashboard.module.css'

class Dashboard extends React.Component {
    state = {
        cities: '',
        currentCountry: ''
    }
    onChange = (e) => {
        e.preventDefault()
        let shortcut = ''
        if (e.target.value === 'Poland') {
            shortcut = 'PL'
        } else if (e.target.value === 'Germany') {
            shortcut = "DE"
        } else if (e.target.value === 'Spain') {
            shortcut = "ES"
        } else if (e.target.value === 'France') {
            shortcut = 'FR'
        }
        this.setState({
            currentCountry: shortcut
        })
    }
    componentDidMount() {
        fetch(`https://api.openaq.org/v1/latest/?parameter=pm25&country=${this.state.currentCountry}`)
            .then(response => response.json())
            .then(json => this.setState({ cities: json }));
    }
    render() {
        const countries = ["Poland", "Germany", "Spain", "France"]
        return (
            <div className={styles.container}>
                <h3>Enter the country</h3>
                <form>
                    <input type="text" id="txtAutoComplete" list="languageList" onChange={this.onChange} className={styles.input_style} />
                    <datalist id="languageList">
                        {countries.map((country) => {
                            return (
                                <option value={country} key={country} className={styles.select_style}>{country}</option>
                            )
                        })}
                    </datalist>
                </form>
                <Info />
            </div>
        )
    }
}

export default Dashboard;
