import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JobList from "./components/JobList/JobList";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <Navbar />
      <Hero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <JobList activeFilter={activeFilter} />
      <Features />
      <Footer />
    </>
  );
}

export default App;
