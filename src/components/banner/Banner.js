import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__image" style={{ backgroundImage: "url('/images/rona.jpg')" }}></div>
            <h1>COVID-19 TRACKER</h1>
        </div>
    )
}
