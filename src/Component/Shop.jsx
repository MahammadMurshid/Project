import React from 'react'
import All from './All'
import Footer from './Footer'
import './Blog.css'
import './Shop.css'


export default function Shop() {
  return (
    <>
      <All />
      <div className="Shop-BackGround">
        <div className="info">

          <h1 style={{ fontWeight: '700', fontSize: '50px', margin: '0' }}>Shop</h1>
          <span><h4 style={{ margin: '0' }}>Home- Shop</h4></span>
        </div>
      </div>

      <div className="All-Shop">
        <div className="Left-Shop">
          <div style={{ backgroundColor: 'white', marginLeft: '0', marginTop: '20px' }} className="department">

            <h2 style={{ textAlign: 'left' }} > Department</h2>
            <ul style={{ textAlign: 'left', paddingLeft: '0' }}>
              <li>Fresh Meat</li>
              <li>Vegetable</li>
              <li>Fruits</li>
              <li>Nuts</li>
              <li>Ocean Food</li>
              <li>Fresh Onion </li>
              <li>Fresh Banana </li>
            </ul>
          </div>
          <div className="Price-Detail">
            <h2 style={{ margin: '0' }}>Price</h2>
            <input style={{ width: '45%' }} type="range" name="" id="" />
          </div>
          <div className="Popular-Size">
            <h2>Popular Size</h2>
            <div className="buttons">
              <button>Large</button>
              <button>Medium</button>
              <button>Small</button>
              <button>Tiny</button>
            </div>

          </div>
        </div>
        <div className="Right-Shop">
          <h1 style={{ margin: '0' }}>Sale Off</h1>
          <div className="animation-item">
            <div className="box" id='box1' >
              <img src='https://themewagon.github.io/ogani/img/categories/cat-3.jpg' alt="" />
              <span>-20%</span>


              <div className="Discount-Detail">
                <h4>vegetable</h4>
                <p>Vegetable-Package</p>
                <p>$30    <span>-30</span></p>
              </div>
            </div>
            <div className="box" id='box2' >
              <img src='https://themewagon.github.io/ogani/img/categories/cat-1.jpg' alt="" />
              <span>-20%</span>
              <div className="Discount-Detail">
                <h4>vegetable</h4>
                <p>Vegetable-Package</p>
                <p>$30    <span>-30</span></p>
              </div>
            </div>
            <div className="box" id='box3' >
              <img src='https://themewagon.github.io/ogani/img/categories/cat-2.jpg' alt="" />
              <span>-20%</span>
              <div className="Discount-Detail">
                <h4>vegetable</h4>
                <p>Vegetable-Package</p>
                <p>$30    <span>-30</span></p>
              </div>
            </div>
            <div className="box" id='box4' >
              <img src='https://themewagon.github.io/ogani/img/categories/cat-5.jpg' alt="" />
              <span>-20%</span>
              <div className="Discount-Detail">
                <h4>vegetable</h4>
                <p>Vegetable-Package</p>
                <p>$30    <span>-30</span></p>
              </div>
            </div>
            <div className="box" id='box5' >
              <img src='https://themewagon.github.io/ogani/img/categories/cat-4.jpg' alt="" />
              <span>-20%</span>
              <div className="Discount-Detail">
                <h4>vegetable</h4>
                <p>Vegetable-Package</p>
                <p>$30    <span>-30</span></p>
              </div>
            </div>
            <div className="box" id='box6' >
              <img src='https://themewagon.github.io/ogani/img/categories/cat-2.jpg' alt="" />
              <span>-20%</span>
              <div className="Discount-Detail">
                <h4>vegetable</h4>
                <p>Vegetable-Package</p>
                <p>$30  <p>-30</p></p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
