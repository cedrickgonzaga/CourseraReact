import { Link } from "react-router-dom";
import "../index.css";
import bg from "../assets/bg.avif"

function LandingPage() {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Verdant Haven 🌿</h1>
        <p>Where every leaf tells a story.</p>
        <Link to="/products" className="button">
          Get Started
        </Link>
        <div className="message">
          <h3>Welcome to Verdant Haven!</h3>
          <p>
            Your trusted companion in bringing nature closer to home. We believe
            that plants are more than just décor — they’re living art that
            breathe life and calm into every space. Our collection is carefully
            curated to suit every lifestyle, from low-maintenance greens for
            busy individuals to exotic species for passionate collectors.
          </p>
          <p>
            At Verdant Haven, we nurture connections between people and nature.
            Each plant comes with care guidance and a promise of quality grown
            with love. Step into a greener world and let your home bloom with
            peace and purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
