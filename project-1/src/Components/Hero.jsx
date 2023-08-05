const Hero = () => {
  return (
    <div>
      <main className="container">
        {/* first div */}
        <div className="first-div">
          <p className="heading">YOUR FEET DESERVE THE BEST</p>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div>
            <button className="shop">Shop Now</button>
            <button className="category">Category</button>
          </div>
          <div className="icon">
            <p>Also Available On</p>
            <div>
              <img src="./src/assets/images/flipkart.png" />
              <img src="./src/assets/images/amazon.png" />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="./src/assets/images/shoe_image.png" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
