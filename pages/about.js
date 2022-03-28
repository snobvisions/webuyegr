import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>WeBuyEGR | EyeWear - About</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                EGR Everyday Getting Rich WorldWide
              </h2>
              <h4 className="font-size-subheader mb-4">
                This is EGR - <a href="https://egr.com/" target="_blank" className="cjs-link" rel="noopener noreferrer">Everyday Getting Rich</a>.
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://egr.com/" target="_blank" rel="noopener noreferrer">
                  EGR Website
                </a>
                <a className="px-4 py-3 about-dev" href="https://egr.com/" target="_blank" rel="noopener noreferrer">
                 Join email list
                </a>
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/netlify-illustration.svg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Who We Are.
            </h3>
            <h4 className="font-size-subheader mb-4">
              If you would like to video of our customers wearing our glasses!
            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-net"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here.
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
            Changing the way people buy glasses
            </h3>
            <h4 className="font-size-subheader mb-4">
            7 out of 10 adults in the U.S need eye correction. When we founded our company because it was very clear to see that people were
            overpaying for glasses as they were perceived mainly as a health necessity and the stores were taking advantage of that.
            Back then the variety was limited and the prices were so high that purchasing eyewear was considered a burden.
            This is still true in many cases and we are here to change that, to make a difference.!
            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-gb"
                href="https://www.webuyegr.com/collection"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Collection
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/github-illustration.svg" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/blog-illustration.svg" alt="Commerce.js blog illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Cigars and Cars Blog
            </h3>
            <h4 className="font-size-subheader mb-4">
              Read and Watch the full blog here if you want to get into the nitty gritty!
            </h4>
            <div className="mt-3">
              <a
                className="px-5 py-3 flex-grow-1 font-color-white about-blog"
                href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read/Watch Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
