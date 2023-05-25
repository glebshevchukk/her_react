import FadeIn from 'react-fade-in';
import 'bulma/css/bulma.min.css';
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Verify() {

  const navigate = useNavigate();

  const handleComplete = (string) => {
    console.log(string)
    var formData = new FormData();
    formData.set('code',string);
   
    axios.post('/verify', formData)
        .then(response => {
            if(response.data.status==200){navigate("/choose_page");}
            else{alert(response.data.message)}
            
        }
        );
    }

  return (
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div>
                  <FadeIn delay="1000">
                    
                    <div>
                        <label class="subtitle">Verification code.</label>
                        <div name="code" class="control is-centered custom-verify">
                        <VerificationInput onComplete={handleComplete}classNames={{
                        input: "input is-centered",
                        }}/>
                        </div>
                    </div>
           
                  </FadeIn>
            </div>
          </div>
        </section>
  );
}
