import './FilterBar.css'

const filters = [
  { id: 'all', label: 'All Jobs' },
  { id: 'remote', label: 'Remote' },
  { id: 'fulltime', label: 'Full-Time' },
  { id: 'internship', label: 'Internship' },
  { id: 'design', label: 'Design' },
  { id: 'engineering', label: 'Engineering' },
]

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <section className="filterbar-section">
      <div className="container">
        <div className="filterbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`chip ${activeFilter === filter.id ? 'chip--active' : ''}`}
              onClick={() => onFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FilterBar