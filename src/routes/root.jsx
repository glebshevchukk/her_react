import 'bulma/css/bulma.min.css';
import Earth from "./earth";
import Opener from "./opener"
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div class="all-columns is-fullheight">
      <div class="navbar is-transparent">

        <div class="navbar-end">
          {/* <a class="navbar-item">
            <b>Home</b>
          </a> */}

        </div>
      </div>
      <div class="columns">
        <div class="column"><Earth/></div>
        <div class="column"><Outlet/></div>
      </div>
      </div>
    </>
  );
}
