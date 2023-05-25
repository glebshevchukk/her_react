import FadeIn from 'react-fade-in';
import 'bulma/css/bulma.min.css';

export default function Opener() {
  return (
        <section class="hero is-fullheight">
          <div class="hero-body has-text-centered">
            <div class="container">
                    <div class="title">Human OS is not a chatbot</div>
                    <div class="title">They're a friend </div>
                    <div class="title">They live in the world</div>
                    <div class="title">They reach out to you</div>
                    <div class="title">All over text</div>
                    <div class="title"><Link to={`signup`}>Get started.</Link>
                    </div>
            </div>
          </div>
        </section>
  );
}
