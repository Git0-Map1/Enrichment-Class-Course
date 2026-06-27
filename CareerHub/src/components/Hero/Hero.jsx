import SearchBar from "../SearchBar/SearchBar";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <span className="eyebrow">2,400+ open roles updated daily</span>
        <h1 className="hero__title">Find Your Dream Job</h1>
        <p className="hero__subtitle">
          Browse curated roles from verified companies. Filter by remote, type,
          and team and apply in a couple of clicks
        </p>

        <SearchBar />

        <p className="hero__trending">
          <span> Trending: </span> Product Designer · React Developer · Data Analyst · DevOps Engineer
        </p>
      </div>
    </section>
  );
}

export default Hero;
