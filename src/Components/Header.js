import React from 'react';

export default function Header(props){
    return (
        <header>
            <img src={props.img} alt="L"></img>
            <h2>Meme Generator</h2>
        </header>
    )
}