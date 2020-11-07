import React, {Component} from 'react';
import Link from "next/link.js";

class About extends Component {

    static async getInitialProps() {
        console.log('*******Get Initial Props*******')
        return {}
    }

    render() {

        return (
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;
