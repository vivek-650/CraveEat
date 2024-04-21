import React, { useEffect } from 'react';

const CuisinesSlider = (props) => {
  useEffect(() => {
    const prev = () => {
      let box = document.querySelector('.card-slider-main');
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      box.style.scrollBehavior = 'smooth';
      // console.log(width);
    };

    const next = () => {
      let box = document.querySelector('.card-slider-main');
      let width = box.clientWidth;
      box.style.scrollBehavior = 'smooth';
      box.scrollLeft = box.scrollLeft + width;
    };
    document.querySelector('.arrow-left').addEventListener('click', prev);
    document.querySelector('.arrow-right').addEventListener('click', next);

  }, []); // Empty dependency array ensures this effect runs only once on mount

  const { cusData } = props;
  return (
    <div>
      <div className="container">
        <div className="main-slider">
          <div className="label-container">
            <h2>What's on your mind?</h2>
            <button className="arrow-left"><i className="ri-arrow-left-s-line"></i></button>
            <button className="arrow-right"><i className="ri-arrow-right-s-line"></i></button>
          </div>
          <div className="card-slider-main">
            <div className="card-wrapper">
              {cusData.map((elem) => (
                <img key={elem.id} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${elem.imageId}`} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default CuisinesSlider;
