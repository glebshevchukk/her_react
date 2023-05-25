import 'bulma/css/bulma.min.css';
import ReactCardCarousel from 'react-card-carousel';
import Card from './card';
import axios from 'axios';
import { useState, useEffect } from 'react';


const carouselStyle = {
      position: "relative",
      height: "100vh",
      left: "-5vw",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
}

export default function Choose() {
 
  let [tiles, setTiles] = useState([]);
  useEffect(() => {
    getCharactersWithFetch();
  }, []);

  const getCharactersWithFetch = async () => {
    const response = await axios.get('/get_all_characters');
    setTiles(response.data);
  };

  return (
    <div>
        
        <div style={carouselStyle}>
            <ReactCardCarousel autoplay={ false} >
            {tiles.map((tile) => {
              return (
                <Card character={tile} />
              );
            })}     
          </ReactCardCarousel>

        </div>
        </div>
  );
}
