import "./JobCard.css";

import { useState } from "react";
function JobCard({
  title,
  company,
  location,
  type,
  salary,
  badge,
  logoText,
  logoColor,
  logoBg,
}) {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <article className="job-card">
      <div className="job-card__top">
        <div
          className="job-card__logo"
          style={{ background: logoBg, color: logoColor }}
        >
          {logoText}
        </div>

        <button
          className={`job-card__save ${isSaved ? "is-saved" : ""}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isSaved ? "currentColor" : "none"}
          >
            <path
              d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17l-6-4-6 4V4z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </button>
      </div>

      <h3 className="job-card__title">{title}</h3>
      <p className="job-card__company">{company}</p>

      <div className="job-card__meta">
        <span className="job-card__tag">📍 {location}</span>
        <span className="job-card__tag">{type}</span>
      </div>

      <p className="job-card__salary">{salary}</p>

      <div className="job-card__footer">
        <span className={`badge badge--${badge}`}>{badge}</span>
        <button className="btn btn--primary btn--small">Apply Now</button>
      </div>
    </article>
  );
}

export default JobCard;
