import tourOne from "../assets/images/tour1.jpg";
import { tours } from "../data";

const Tours = () => {
  return (
    <div className="container" id="tours">
      <div className="tours">
        <h2>Featured Tours</h2>
        <div className="items">
          {tours.map((tour) => (
            <div className="item">
              <img src={tour.image} alt="tour" />
              <h4>{tour.heading}</h4>
              <p>{tour.text}</p>
              <div className="info">
                <span>{tour.location}</span>
                <span>{tour.days} days</span>
                <span>${tour.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tours;
