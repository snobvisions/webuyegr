import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            We Buy EGR
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                href="https://"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Features
              </a>
            </div>
            <div>
              <a
                href="https://www.egr.com/about"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a
                href="https://www.egr.com/bulk"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bulk Order
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://youtube.com"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
            <a
              href="https://egr.com"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              EGR.com
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://egrwear.com"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              EGRwear.com
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://egr.com"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; { new Date().getFullYear() } EGR - Everyday Getting Rich.
            </a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="https://masstermarketing.com/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; { new Date().getFullYear() } MassterMarketing.com.
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
