import FeatureCard from "../FeatureCard/FeatureCard";
import "./Features.css";

const features = [
  {
    id: "verified",
    title: "Verified Jobs",
    description:
      "Every listing is checked by our team before it goes live, so you never waste time on stale or fake postings.",
  },
  {
    id: "remote-friendly",
    title: "Remote Friendly",
    description:
      "Thousands of remote roles from companies that hire globally, filtered and tagged so they are easy to find.",
  },
  {
    id: "fast-apply",
    title: "Fast Apply",
    description:
      "Save your profile once and apply to any role in under a minute. No repeated forms, no friction.",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2 className="section-heading__title">Why CareerHub</h2>
          <p className="section-heading__subtitle">
            Built to make job hunting feel less like a part-time job
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
