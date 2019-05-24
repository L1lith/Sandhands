import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Getting started with Sandhands</h2>
                <p>
                    Sandhands is used to sanitize all kinds of arbitarily complex user input! To get
                    started try looking around at the{' '}
                    <li>
                        <Link to="/Sandhands/format">Format section</Link>
                    </li>{' '}
                    and{' '}
                    <li>
                        <Link to="/Sandhands/sandbox">play around with the sandbox!</Link>
                    </li>
                </p>
            </div>
        )
    }
}

export default { path: '/Sandhands/', exact: true, component: Home }
