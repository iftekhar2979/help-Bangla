import React from 'react';


const Banner = () => {
    return (
<div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Help Our Children's</h1>
        <p className="lead">Help break the cycle of poverty for children. Support programs providing education, nutrition, and healthcare. Give hope for a brighter future</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Donation</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Join With Us</button>
        </div>
      </div>
    </div>
  </div>

    );
};

export default Banner;