import Hero from "./components/Hero";
import RatingContainer from "./components/RatingContainer";
import ReviewContainer from "./components/ReviewContainer";

function App() {
  return (
    <main className="font-League-Spartan px-4 py-14">
      <div>
        <Hero />
        <RatingContainer />
      </div>
      <ReviewContainer />
    </main>
  );
}

export default App;
