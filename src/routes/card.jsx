import 'bulma/css/bulma.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Card(props){
  const navigate = useNavigate();

  function handleClick(cid){
    var formData = new FormData();
    console.log(cid);
    formData.set('cid',cid);
    axios.post('/choose_character', formData)
        .then(response => {
            console.log(response);
            if(response.data.status==200){navigate("/finish_page");}
            else{alert(response.data.message)}
            
        }
        );
  }
    let character=props.character;
    let image_path=`/static/profiles/${character.id}.png`;
    return (
            <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-96x96">
          <img class="is-rounded" src={image_path} alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{character.first_name} {character.last_name}</p>
        <p class="subtitle">{character.home_city}, {character.home_country}</p>
      </div>
    </div>

    <div class="content">
    <p>{character.life_summary}</p>
        <br/>
        <div class="subtitle is-pulled-right"> 
        <button onClick={() => handleClick(character.id)} class="button">Choose character.</button>
         </div>
        
    </div>
  </div>
        </div>
    )
} 