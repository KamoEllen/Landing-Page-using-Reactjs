import React from 'react';

const LandingPage = () => {
  const backgroundImageUrl =
    'https://images.pexels.com/photos/6170152/pexels-photo-6170152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'center', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="header">
        <button className="ctaButton" style={{ marginRight: '90px' }} color="#FF0000">Home</button>
        <button className="ctaButton" style={{ marginRight: '90px' }} color="#00FF00">Product</button>
        <button className="ctaButton" style={{ marginRight: '90px' }} color="#0000FF">Sign Up</button>
        <button className="ctaButton" style={{ marginRight: '90px' }} color="#FFA500">Contact</button>
      

      <div className="content">
        <button><h1 className="headline">Introducing "NexDrop" - Your Ultimate Dropshipping Solution!</h1></button>
        <button><h4>
          Why choose NexDrop? We stand out from the competition by offering a seamless and efficient dropshipping experience. With our state-of-the-art technology and extensive network of trusted suppliers, we make it easier than ever for you to source high-quality products and deliver them directly to your customers' doorsteps. Read More...
        </h4></button>
      </div></div>

      <div className="contents" style={{ textAlign: 'center' }}>
        <button className="ctaButton">Start Dropshipping with NexDrop! Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
