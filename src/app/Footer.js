import React from 'react';

// Props are passed as params
export default function Footer(props) {
    /* let year = 2018;
    let company = "ANZ"; */

    // Deconstruct
    let {year, company} = props;

        return (
            <div>
                <hr />
                <p>Copyrights@ {year}, {company} </p>
            </div>
        );
}