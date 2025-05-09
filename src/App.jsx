import Hero from "./components/Hero";
import RatingContainer from "./components/RatingContainer";
import ReviewContainer from "./components/ReviewContainer";

function App() {
  return (
    <main className="font-League-Spartan px-4 py-14 xl:py-6 xl:max-w-[1440px] xl:mx-auto">
      <div className="xl:flex xl:items-center xl:mb-6">
        <Hero />
        <RatingContainer />
      </div>
      <ReviewContainer />
    </main>
  );
}

export default App;
