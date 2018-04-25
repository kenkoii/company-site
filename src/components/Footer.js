import React from 'react';
import Link from 'gatsby-link';

const Footer = (props) => {
    return (
        <div className="footer footer--mobile">
            <ul className="footer__group">
                <li>
                    <Link to="">For media</Link>
                </li>
                <li>
                    <Link to="">Terms of service</Link>
                </li>
                <li>
                    <Link to="">Privacy policy</Link>
                </li>
                <li>
                    <Link to="">Say hello</Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer