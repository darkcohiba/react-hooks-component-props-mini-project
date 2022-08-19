import React from 'react';

export default function About({about, image = "https://via.placeholder.com/215"}) {
    return (
        <div>
            <aside>
                <img src={image} />
                <p> {about} </p>

            </aside>
        </div>
    )
}