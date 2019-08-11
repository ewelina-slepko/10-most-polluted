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
        console.log(e.target.value)
        this.setState({ currentCountry: e.target.value })
    }
    componentDidMount() {
        fetch('https://api.openaq.org/v1/locations')
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
