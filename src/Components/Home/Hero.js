import React from 'react';

const Hero = () => {
  return (
    <div className='container'>
      <div
        className='d-flex container-fluid '
        lc-helper='background'
        style={{
          height: '70vh',
          marginTop: '20px',
          background:
            'url(https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)  center / cover no-repeat',
        }}
      ></div>
      <div className='container p-5 bg-light' style={{ marginTop: '35px' }}>
        <div className='row'>
          <div className='col-md-4 text-center align-self-center'>
            <div className='lc-block border-end border-2 '>
              <div editable='rich'>
                <p className='display-4 text-secondary'>WHY?</p>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='lc-block '>
              <div editable='rich'>
                <p className='display-4'>
                  Make a difference today. Read our charity blog to learn about
                  inspiring causes, organizations and ways to get involved. Join
                  us in giving back to our community
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-9 offset-md-1'>
            <div className='lc-block mt-5'>
              <div editable='rich'>
                <p className='lead text-secondary'>
                  Volunteering is a rewarding experience that not only helps
                  those in need, but also enriches our own lives. From local
                  community projects to international aid missions, there's a
                  volunteer opportunity for everyone. In our volunteer blog, we
                  showcase the stories of everyday people making a difference
                  through their time and effort. Join us as we explore the power
                  of volunteerism, learn about various organizations making a
                  positive impact, and discover how you too can make a
                  difference. Whether it's a one-time event or a ongoing
                  commitment, every little bit helps. Let's inspire change
                  together.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
