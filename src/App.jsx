import Hero from "./components/Hero";
import RatingContainer from "./components/RatingContainer";
import ReviewContainer from "./components/ReviewContainer";

function App() {
  return (
    <main className="font-League-Spartan px-4 py-14 lg:w-[1440 px] lg:mx-auto">
      <div className="lg:flex lg:justify-between lg:items-center lg:mb-16">
        <Hero />
        <RatingContainer />
      </div>
      <ReviewContainer />
    </main>
  );
}

export default App;
