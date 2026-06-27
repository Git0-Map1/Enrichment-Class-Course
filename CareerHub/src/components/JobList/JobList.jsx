import { jobs } from "../../data/jobs";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";

function JobList({ activeFilter }) {

  const visibleJobs = activeFilter === 'all'
    ? jobs
    : jobs.filter((job) => job.tags.includes(activeFilter))
  // console.log("jobs", jobs);
  return (
    <section className="job-section">
      <div className="container">
        <div className="job-grid">
          {visibleJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobList;
