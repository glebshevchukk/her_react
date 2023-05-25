import FadeIn from 'react-fade-in';
import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";

export default function Opener() {
  return (
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div>
                  <FadeIn delay="1000">
                    <div class="subtitle">Thank you for signing up. Your new friend will reach out shortly.</div>
                   
                  </FadeIn>
            </div>
          </div>
        </section>
  );
}
