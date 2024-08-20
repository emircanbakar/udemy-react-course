import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Sezonun en iyisi!</span>
        <h2>Özel Kolleksiyon</h2>
        <a href="/">Keşfet!</a>
      </div>
      <div className="hero-image-container">
        <img src="/img/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
