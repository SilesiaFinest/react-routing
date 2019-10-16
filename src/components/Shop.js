import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//using Pokedex API to generate pokemon names and to generate dynamic links

function Shop() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] =  useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    const items = await data.json();

    setItems(items.pokemon);
  }
// Here in Link we are passing an object as props(match) to the child
  return (
    <div>
       {items.map(item => (
         <h2 className='pokeName' key={item.id}>
         <Link to={{pathname:`/shop/${item.num}`, state:{item}}}>{item.name}</Link>
         </h2>
       ))}
    </div>
  );
}

export default Shop;
