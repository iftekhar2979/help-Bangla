import React from 'react';
import BannerOption from './BannerOption';
import SecondBannerCard from './SecondBannerCard';

const SecondBanner = () => {
    return (
        <div className="hero my-3"> 
  <div className="container">     
    <div className="hero-content"> 
      <div className="row">   
      <div className='col-md-12 col-lg-6'>

        <SecondBannerCard></SecondBannerCard>
      </div>
      <div className="col-md-12 col-lg-6">
        <BannerOption></BannerOption>
      </div>
      </div> 
    </div>
  </div> 
</div>
    );
};

export default SecondBanner;