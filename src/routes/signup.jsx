

import 'bulma/css/bulma.min.css';
import FadeIn from 'react-fade-in';
import history from '../history';
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'

import{ useState } from 'react'
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    var formData = new FormData(event.currentTarget);
    event.preventDefault();
    console.log(formData.get('phone_numberCountry'));
    formData.set('phone_number',"+"+ getCountryCallingCode(formData.get('phone_numberCountry'))+formData.get('phone_number'));
    formData.set('credentials', "include");
    axios.post('/signup', formData)
        .then(response => {
            console.log(response);
            if(response.data.status==200){navigate("/verify_page");}
            else{alert(response.data.message)}
            
        }
        );
    }

  const [value, setValue] = useState()
  return (
    
    <section class="hero is-fullheight">
          <div class="hero-body">
                <FadeIn>
                <form onSubmit={handleSubmit} >
                <div class="field">
                <label class="subtitle">What is your first name?</label>
                <div class="control">
                    <input name="first_name" class="input custom-input" type="text"/>
                </div>
                </div>
                <div class="field">
                <label class="subtitle">What is your phone number?</label>
                <div class="control">
                    <PhoneInput
                        placeholder="Enter phone number"
                        defaultCountry="US"
                        value={value}
                        name="phone_number"
                        className="input custom-input"
                        onChange={setValue}/>
                </div>
                </div>
                <div class="field is-grouped">
                <p class="control">
                    <button class="button submit-button"
                    type="submit"
                    >
                    Submit
                    </button>
                </p>
                </div>
                </form>
                </FadeIn>
            </div>
        </section>
  );
}