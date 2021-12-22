import Team from "../../Assets/team.jpg";
import Goalie from "../../Assets/goalie.jpg";
import { Button } from "@mui/material";

function Landing() {
  return (
    <div className="landing-container page">
      <div className="landing-container__hero">
        <h2>Further Your Soccer Career Today</h2>
        <img src={Team} alt="soccer team" />
        <div className="ice"></div>
        <div className="landing-container__hero-buttons">
          <Button variant="contained" size="large">
            Calendar
          </Button>
          <Button variant="contained" size="large">
            Contact
          </Button>
        </div>
      </div>

      <section id="landing-articles">
        <article>
          <img src={Goalie} alt="placeholder" />
          <div class="article-info">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </div>
        </article>

        <article>
          <div class="picture-frame">
            <img src={Goalie} alt="placeholder" />
          </div>

          <div class="article-info">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Landing;
