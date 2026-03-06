import React from 'react';
import { NavLink } from 'react-router';

const Home = () => {
    return (
       <div>
                  <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/5WgkZT3W/Gemini-Generated-Image-zi08t4zi08t4zi08.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Pay Bills</h1>
      <p className="mb-5 lg:text-2xl">
       A Pay Bills website is an online platform that allows users to quickly and securely pay different types of bills
      </p>
      <NavLink to="/bills" className="btn btn-primary px-10 text-xl">
        Bills
      </NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;