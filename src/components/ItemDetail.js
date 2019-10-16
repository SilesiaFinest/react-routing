import React, { useState, useEffect } from 'react';
import './App.css';


function ItemDetail(match) {

    useEffect(() => {
        fetchImage();
    });

    const [image, setImage] = useState([]);

    const pokemon = match.location.state;
    // console.log(pokemon.item)

    const fetchImage = async () => {
        const image = await pokemon.item.img;
        setImage(image);
    }

    return (
        <div>
        <h1>{pokemon.item.name}</h1>
        <img src={image} alt='pokemon'/>
        </div>
    );
}

export default ItemDetail;
