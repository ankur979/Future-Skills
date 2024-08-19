import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-semibold mb-4">Abstract</h2>
            <ul>
              <li className="mb-2">Branches</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Community</h2>
            <ul>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Legal</li>
              <li className="mb-2">Contact Us</li>
              <li>info@abstract.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center sm:text-left flex justify-end">
          {/* <div className="text-white mb-4">
            <img src="/path-to-logo.png" alt="Abstract Logo" className="h-6 mx-auto sm:mx-0" />
          </div> */}
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-sm">&copy; Copyright 2022</span>
            <span className="block">Abstract Studio Design, Inc.</span>
            <span className="block">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
