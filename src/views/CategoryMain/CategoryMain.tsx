import React from 'react';
import logo from './logo.svg';
import './CategoryMain.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function CategoryMain() {
  return (
    <div className="CategoryMain">
      <section id="sec01">
        <div className="container">
          <div className="img01">
            <Link to="/Category" className="text-info">
              <div className="text00">more</div>
            </Link>
          </div>
          <div className="img02">
            <div className="text00">
              <a href="" className="text-info">
                more
              </a>
            </div>
          </div>
          <div className="img03">
            <div className="text00">
              <a href="" className="text-info">
                more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryMain;
