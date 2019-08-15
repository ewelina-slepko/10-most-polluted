import React from 'react'

const Info = ({ cities }) => {
    return (
        <div>
            {cities.map((info) => {
                return (
                    <p key={info.city}>
                        <span>City: {info.city} </span>
                        <span>Value: {info.value} </span>
                        <span>Parameter: {info.parameter} </span>
                    </p>
                )
            })}
        </div>
    )
}

export default Info;
