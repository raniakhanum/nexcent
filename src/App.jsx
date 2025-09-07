import React from "react";
import "./index.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true      
    });
  }, []);

  return (
    <div className="font-sans text-gray-600">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-5 bg-white shadow-sm" data-aos="fade-down">
        <div className="flex items-center space-x-2">
          <img src="/Logo.svg" alt="Logo" className="h-8" />
        </div>
        <nav className="hidden md:flex space-x-8 font-medium text-gray-500">
          <a href="#home" className="hover:text-gray-900">Home</a>
          <a href="#service" className="hover:text-gray-900">Service</a>
          <a href="#feature" className="hover:text-gray-900">Feature</a>
          <a href="#product" className="hover:text-gray-900">Product</a>
          <a href="#testimonial" className="hover:text-gray-900">Testimonial</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-green-600 font-medium hover:text-gray-900">Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-between py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center md:text-left ml-20">
          <h2 className="text-4xl whitespace-nowrap md:text-6xl font-semibold leading-tight text-gray-700">
            Lessons and insights <br />
            <span className="text-green-600">from 8 years</span>
          </h2>
          <p className="mt-4 whitespace-nowrap text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition">
            Register
          </button>
        </div>
        <img
          src="/Illustration.svg"
          alt="Hero Illustration"
          className="w-full ml-20 sm:w-3/4 md:w-[90%] lg:w-[80%] h-auto max-h-[28rem] object-contain"
        />
      </section>

      {/* Clients */}
      <section className="py-10 text-center" data-aos="zoom-in">
        <h3 className="text-4xl font-semibold text-gray-600">Our Clients</h3>
        <p className="text-gray-600 mt-3">We have been working with some Fortune 500+ clients</p>
        <div className="flex justify-center w-full gap-12 mt-6">
          <img src="/Clients%20Logos.svg" alt="Client 1" className="h-full" />
        </div>
      </section>

      {/* Features */}
      <section id="feature" className="py-16 px-10 bg-gray-50 text-center" data-aos="fade-right">
        <h2 className="text-4xl leading-tight font-semibold text-gray-600">Manage your entire community <br/> in a single system</h2>
        <h3 className="mt-3 text-gray-600">Who is Nexcent suitable for?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-6 shadow rounded-lg bg-white">
            <img src="/Icon.svg" alt="Members" className="mx-auto h-16" />
            <h3 className="mt-4 font-semibold text-gray-900">Membership Organisations</h3>
            <p className="text-gray-500 mt-2">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-white">
            <img src="/Icon%20(1).svg" alt="National" className="mx-auto h-16" />
            <h3 className="mt-4 font-semibold text-gray-900">National Associations</h3>
            <p className="text-gray-500 mt-2">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg bg-white">
            <img src="/Icon%20(2).svg" alt="Clubs" className="mx-auto h-16" />
            <h3 className="mt-4 font-semibold text-gray-900">Clubs And Groups</h3>
            <p className="text-gray-500 mt-2">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>
        </div>
      </section>

      {/* Pixelgrade Section */}
      <section id="product" className="flex flex-col -mt-20 md:flex-row items-center justify-between px-10 py-16" data-aos="fade-left">
        <img src="/Frame%2035.svg" alt="Pixelgrade" className="w-full ml-20 sm:w-/4 md:w-[90%] lg:w-[80%] h-auto max-h-[25rem] object-contain" />
        <div className="max-w-lg md:ml-50 mt-6 md:mt-0">
          <h2 className="text-4xl -ml-40 font-semibold text-gray-600">
            The unseen of spending three <br/> years at Pixelgrade
          </h2>
          <p className="text-gray-600 mt-4 -ml-40 pr-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
          </p>
          <button className="mt-6 -ml-40 bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Helping Local Business */}
      <section className="flex flex-col -mt-20 md:flex-row px-10 py-16 bg-gray-50 text-center" data-aos="zoom-in-up">
        <div className="max-w-lg ml-20 mt-5 text-left">
        <h2 className="text-4xl font-semibold text-gray-600">Helping a local </h2>
        <span className="text-4xl font-semibold text-green-600 leading-tight"> business reinvent itself</span>
        <p className="text-gray-500 mt-2">We reached here with our hard work and dedication</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 -mt-9 max-w-4xl mx-auto">

      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <img src="/Icon%20(3).svg" alt="Members" className="h-12 w-12" />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-gray-900">2,245,341</h3>
        <p className="text-gray-500">Members</p>
      </div>
    </div>

    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <img src="/Icon.png" alt="Clubs" className="h-12 w-12" />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-gray-900">46,328</h3>
        <p className="text-gray-500">Clubs</p>
      </div>
    </div>

    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <img src="/Icon%20(6).svg" alt="Event Bookings" className="h-12 w-12" />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-gray-900">828,867</h3>
        <p className="text-gray-500">Event Bookings</p>
      </div>
    </div>

    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <img src="/Icon%20(5).svg" alt="Payments" className="h-12 w-12" />
      <div className="text-left">
        <h3 className="text-2xl font-bold text-gray-900">1,926,436</h3>
        <p className="text-gray-500">Payments</p>
      </div>
    </div>
  </div>
</section>

{/* Pixelgrade Section */}
      <section id="product" className="flex flex-col -mt-15 md:flex-row items-center justify-between px-10 py-16" data-aos="fade-up">
        <img src="/pana.svg" alt="Pixelgrade" className="w-full ml-20 sm:w-/4 md:w-[90%] lg:w-[80%] h-auto max-h-[25rem] object-contain" />
        <div className="max-w-lg md:ml-50 mt-6 md:mt-0">
          <h2 className="text-4xl -ml-40 font-semibold text-gray-600">
            How to design your site footer like <br/>we did
          </h2>
          <p className="text-gray-600 mt-4 -ml-40 pr-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorem expedita numquam quaerat accusamus fugiat mollitia in dolores earum nemo assumenda aliquam, eos nostrum, quidem ullam placeat officia. Quisquam, maxime asperiores quaerat a non, accusamus itaque culpa hic, ex necessitatibus commodi vitae mollitia totam aliquid accusantium sed eius facere? Quas.
          </p>
          <button className="mt-6 -ml-40 bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Pixelgrade Section */}
      <section id="product" className="flex flex-col -mt-15 md:flex-row items-center justify-between px-10 py-16" data-aos="fade-right">
        <img src="/image%209.svg" alt="Pixelgrade" className="w-full ml-20 sm:w-/4 md:w-[90%] lg:w-[80%] h-auto max-h-[17rem] object-contain mt-3" />
        <div className="max-w-lg md:ml-50 mt-6 md:mt-0">
          <p className="text-gray-600 mt-4 -ml-40 pr-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorem expedita numquam quaerat accusamus fugiat mollitia in dolores earum nemo assumenda aliquam, eos nostrum, quidem ullam placeat officia. Quisquam, maxime asperiores quaerat a non, accusamus itaque culpa hic, ex necessitatibus commodi vitae mollitia totam aliquid accusantium sed eius facere? Quas.
          </p>
          <h4 className="-ml-40 mt-4 font-semibold text-green-600">Tim Smith</h4>
          <p className="-ml-40 text-gray-400 text-sm">British Dragon Boat Racing Association</p>
          <img src="/Frame%2014.svg" alt="Pixelgrade" className="flex flex-col -ml-40 mt-3" />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-10 py-16 bg-gray-50" data-aos="zoom-in">
        <h2 className="text-3xl font-semibold text-center text-gray-600">Caring is the new marketing</h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mt-2">
          The Nexcent blog is the best place to read about the latest membership insights,
          trends and more. See who s joining the community, read about how our community
          are increasing their membership income and lot's more.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/image%2018.svg" alt="Blog 1" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-gray-600">Creating Streamlined Safeguarding Processes with OneRen</h3>
              <button className="mt-3 text-green-600 font-medium hover:underline">Readmore</button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/image%2019.svg" alt="Blog 2" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-gray-600">What are your safeguarding responsibilities and how can you manage them?</h3>
              <button className="mt-3 text-green-600 font-medium hover:underline">Readmore</button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/image%2020.svg" alt="Blog 3" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-gray-600">Revamping the Membership Model with Triathlon Australia</h3>
              <button className="mt-3 text-green-600 font-medium hover:underline">Readmore</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section: Get a Demo */}
<section className="-mt-10 px-10 py-20 bg-gray-50 text-center" data-aos="zoom-out">
  <h2 className="text-4xl whitespace-nowrap md:text-6xl font-semibold leading-tight text-gray-700">
    Pellentesque suscipit <br/> fringilla libero eu.
  </h2>

  <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition">
    Get a Demo
  </button>
</section>


      {/* Footer */}
      <footer id="faq" className="bg-gray-900 text-gray-300 px-10 py-12" data-aos="fade-up">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/Logo%20(2).svg" alt="Logo" className="h-8" />
            <p className="mt-6 text-sm">Copyright © 2020 Nexcent Ltd. <br/> All rights reserved</p>
            <img src="Social%20Links.svg" alt="Logo" className="mt-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Stay up to date</h4>
            <input
              type="email"
              placeholder="Your email address"
              className="mt-3 w-full px-3 py-2 rounded-md text-white"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;