import React from 'react';

export default function Article ({date = "January 1, 1970", minutes, title, preview}){
    return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        </div>
    )
}