import FadeIn from 'react-fade-in';
import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";

export default function Opener() {
  return (
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div>
                  <FadeIn delay="1000">
                    <div class="subtitle">Human OS is not a chatbot</div>
                    <div class="subtitle">They're a friend </div>
                    <div class="subtitle">They live in the world</div>
                    <div class="subtitle">They reach out to you</div>
                    <div class="subtitle">All over text</div>
                    <div class="subtitle"><Link to={'/signup_page'}>Get started.</Link>
                    </div>
                  </FadeIn>
            </div>
          </div>
        </section>
  );
}
