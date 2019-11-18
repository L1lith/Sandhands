import React, { Component } from 'react'
import Link from 'next/Link'
import '../styles/home.less'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Getting started with Sandhands</h2>
                <p>
                    Sandhands is used to sanitize all kinds of arbitarily complex user input! Make sure to check out the {' '}
                    <li>
                        <Link href="/format.html"><a>Format section</a></Link>
                    </li>{' '}
                    and{' '}
                    <li>
                        <Link href="/sandbox.html"><a>play around with the sandbox!</a></Link>
                    </li>
                </p>
            </div>
        )
    }
}

export default Home
