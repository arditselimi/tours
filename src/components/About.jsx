import aboutImg from "../assets/images/aboutImg.jpg";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="about">
        <h2>About us</h2>
        <div className="items">
          <img src={aboutImg} />
          <div className="info">
            <h3>Our Story So Far</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dignissimos qui quo rerum quidem voluptas incidunt rem
              autem nisi placeat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
