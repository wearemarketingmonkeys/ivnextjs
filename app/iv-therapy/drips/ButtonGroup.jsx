
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

export default function ButtonGroup({ next, previous }) {
  return (
    <div className="custom-arrow-container">
      <button
        className="custom-arrow left-arrow"
        onClick={previous}
        aria-label="Previous"
      >
        <GoChevronLeft />
      </button>

      <button
        className="custom-arrow right-arrow"
        onClick={next}
        aria-label="Next"
      >
        <GoChevronRight />
      </button>
    </div>
  );
}
