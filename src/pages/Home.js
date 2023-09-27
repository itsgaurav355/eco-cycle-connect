import React from 'react'
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';


const Home = () => {
  return (
    <>
      {/* <section className="home-wrapper-1 py-5">
      
      </section> */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>Over 2kg of recyclable Items </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Get Excitement Awards</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Always there for help</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Get Amazing Vouchers</h6>
                    <p className="mb-0">On Donating Prroducts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="famous-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/dress2.png" alt="" />
                  <div className="famous-content position-absolute">
                    <h5>Green Arena</h5>
                    <h6>Women Dress</h6>
                    <p>From $399 or $16.62/mo. for 24 mo.*</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-01.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-02.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-03.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-04.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-05.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-06.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-07.png" alt="Brand" />
                  </div>
                  <div className='mx-4 ww-25'>
                    <img src="images/brand-08.png" alt="Brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            
          </div>
        </div>

      </section>
      
    </>
  );
}

export default Home
