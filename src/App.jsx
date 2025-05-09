import Hero from "./components/Hero";
import RatingContainer from "./components/RatingContainer";
import ReviewContainer from "./components/ReviewContainer";

function App() {
  return (
    <main className="font-League-Spartan px-4 py-14 xl:w-[1440 px] xl:mx-auto">
      <div className="xl:flex xl:justify-between xl:items-center xl:mb-16">
        <Hero />
        <RatingContainer />
      </div>
      <ReviewContainer />
    </main>
  );
}

export default App;
