import "./App.css";
import Email from "./components/email/Email";
import HeroSection from "./components/HeroSection";
import Plan from "./components/plans/Plan";
import Program from "./components/programs/Program";
import Testimonial from "./components/testimonial/Testimonial";
import Whyus from "./components/whyus/Whyus";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Program />
      <Whyus />
      <Plan />
      <Testimonial />
      <Email />
    </div>
  );
}

export default App;
