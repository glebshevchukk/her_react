import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.min.css';
import * as Three from 'three';
import{ useState } from 'react'
import axios from 'axios'


import { SizeMe } from 'react-sizeme'

export default function Earth() {
  let [chars, setChars] = useState([]);

  const getCharactersWithFetch = async () => {
    const response = await axios.get('/get_all_characters');
    setChars(response.data);
  };
  let Globe = () => null;
  if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;
  const { useEffect, useRef } = React;
    const inputRef = useRef();
    React.useEffect(()=>{
      getCharactersWithFetch();
      var globe = inputRef.current;
      if (globe) {
         globe.controls().autoRotate = true;
         globe.controls().autoRotateSpeed = 0.35;
    }
    
    },[inputRef]);

    const gData = [];

    for(var i = 0; i < chars.length; i++) {
      var newSpot = {
        id: chars[i].id,
        lat: chars[i].latitude,
        lng: chars[i].longitude,
        size: 40,
        color: 'white'
      }
      gData.push(newSpot);
    }

    
    return ( 
      <SizeMe monitorHeight render={({ size }) =>
        <Globe
        ref={inputRef}
        animateIn={false}
        width={size.width}
        height={size.height}
        globeImageUrl="https://unpkg.com/three-globe@2.27.2/example/img/earth-night.jpg"
        bumpImageUrl="https://unpkg.com/three-globe@2.27.2/example/img/earth-topology.png"
        htmlElementsData={gData}
        htmlElement={d => {
        const el = document.createElement('div');
        const dloc = `/static/map/${d.id}.png`;
        el.innerHTML = `<img style="border-radius:20px" src=${dloc} alt="Avatar" class="avatar"/>`;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.onclick = () => console.info(d);
        return el;
        }}/>
    }/>);
  }
  