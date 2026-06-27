import { useState } from "react";
import "./SearchBar.css";
import Button from "../Button/Button";
function SearchBar() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `Searching for jobs with title: ${jobTitle} in location: ${location}`,
    );
  };

  return (
    <form className="searchbar" onSubmit={submitHandler}>
      <div className="searchbar__field searchbar__field--grow">
        <svg
          className="searchbar__icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M21 21l-4.3-4.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <input
          type="text"
          placeholder="Job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>

      <div className="searchbar__divider"></div>

      <div className="searchbar__field">
        <svg
          className="searchbar__icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22s7-7.58 7-12.5A7 7 0 1 0 5 9.5C5 14.42 12 22 12 22z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="9.5"
            r="2.5"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Any location</option>
          <option value="remote">Remote</option>
          <option value="san-francisco">San Francisco</option>
          <option value="new-york">New York</option>
          <option value="austin">Austin</option>
          <option value="london">London</option>
        </select>
      </div>

      <Button type="submit" className="searchbar__submit">
        Search Jobs
      </Button>
    </form>
  );
}

export default SearchBar;
