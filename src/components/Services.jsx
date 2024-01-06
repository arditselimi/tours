import expertIcon from "../assets/icons/rating.png";
import adventureIcon from "../assets/icons/hiking.png";
import transIcon from "../assets/icons/fast-delivery.png";
import { services } from "../data";

const Services = () => {
  return (
    <div className="container" id="services">
      <div className="services">
        <h2>Our Services</h2>
        <div className="items">
          {services.map((service) => (
            <div className="item" key={service.id}>
              <img src={service.icon} />
              <h6>{service.text}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
