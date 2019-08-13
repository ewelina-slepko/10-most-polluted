import React from 'react'
import Info from './Info'
import styles from '../styles/Dashboard.module.css'

class Dashboard extends React.Component {
    state = {
        cities: '',
        currentCountry: ''
    }
    getInfo = (shortcut) => {
        fetch(`https://api.openaq.org/v1/latest/?parameter=pm25&country=${shortcut}&limit=1000`)
            .then(response => response.json())
            .then(json => this.setState({ cities: json }));
    }
    onChange = (e) => {
        e.preventDefault()
        let cityShortcut = ''
        if (e.target.value === 'Poland') {
            cityShortcut = 'PL'
        } else if (e.target.value === 'Germany') {
            cityShortcut = "DE"
        } else if (e.target.value === 'Spain') {
            cityShortcut = "ES"
        } else if (e.target.value === 'France') {
            cityShortcut = 'FR'
        }
        this.setState({
            currentCountry: cityShortcut
        })
        this.getInfo(cityShortcut)
    }
    sortData = () => {
        let arr = []
        this.state.currentCountry !== '' && (this.state.cities.results.length > 0 &&
            (arr = this.state.cities.results.map((info, i) => {
                return ({
                    value: info.measurements[0].value,
                    city: info.city
                })
            }))
        )
        console.log(arr)
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
                    <button>Submit</button>
                </form>
                <Info />
                {console.log(this.sortData())}
            </div>
        )
    }
}

export default Dashboard;
