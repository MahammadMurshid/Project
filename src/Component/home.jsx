import React from 'react';
import './Home.css'
import Footer from './Footer'
import img from './Images/logo.jpg'
import img2 from './Images/Burger.png'
import imgC from './Images/Chicken.jpg'
import { Link } from 'react-router-dom';
import All from './All'

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'; */

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Send from '@mui/icons-material/Send';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export default function Home() {
  /*  const Burger = () => {
 
     const BURGER = document.getElementsByClassName('.burger')
     console.log('Hellooo')
 
 
   } */
  return (
    <>
      <All />

      <div style={{ height: '450px' }} className="animation-item">
        <p style={{ backgroundColor: 'red' }}> d<ChevronLeftIcon /></p>
        <div className="box" id='box1' >
          <img src='https://themewagon.github.io/ogani/img/categories/cat-3.jpg' alt="" />
          <div className="Discount-Detail">
            <p>Dry-Druits</p>
            <p>$30</p>
          </div>
        </div>

        <div className="box" id='box2' >
          <img src='https://themewagon.github.io/ogani/img/categories/cat-1.jpg' alt="" />
          <div className="Discount-Detail">
            <p>Dry-Druits</p>
            <p>$30</p>
          </div>

        </div>
        <div className="box" id='box3' >
          <img src='https://themewagon.github.io/ogani/img/categories/cat-2.jpg' alt="" />
          <div className="Discount-Detail">
            <p>Dry-Druits</p>
            <p>$30</p>
          </div>

        </div>
        <div className="box" id='box4' >
          <img src='https://themewagon.github.io/ogani/img/categories/cat-5.jpg' alt="" />
          <div className="Discount-Detail">
            <p>Dry-Druits</p>
            <p>$30</p>
          </div>

        </div>
        <div className="box" id='box5' >
          <img src='https://themewagon.github.io/ogani/img/categories/cat-4.jpg' alt="" />
          <div className="Discount-Detail">
            <p>Dry-Druits</p>
            <p>$30</p>
          </div>

        </div>
        <div className="box" id='box6' >

          <img src={imgC} alt="" />
          <div className="Discount-Detail">
            <p>Dry-Druits</p>
            <p>$30</p>
          </div>

        </div>
      </div>

      <div className="Featured-Prodct">
        <h1>Featured Product</h1>
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Oranges</a>
          </li>
          <li>
            <a href="">Fresh</a>
          </li>
          <li>
            <a href="">Vegetables</a>
          </li>
          <li>
            <a href="">Fastfood</a>
          </li>
          <li>
            <a href="">Meat</a>
          </li>

        </ul>
      </div>
      <div className="Featured-img-card">

        <div className="card  card1">

          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>

          {/*  <img src='https://themewagon.github.io/ogani/img/featured/feature-2.jpg' alt="img3" /> */}
        </div>

        <div className="card  card2">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/*  <img src='https://themewagon.github.io/ogani/img/featured/feature-3.jpg' alt="img3" /> */}
        </div>
        <div className="card  card3">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/* <img src='https://themewagon.github.io/ogani/img/featured/feature-4.jpg' alt="img3" /> */}
        </div>
        <div className="card  card4">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/*  <img src='https://themewagon.github.io/ogani/img/featured/feature-5.jpg' alt="img3" /> */}
        </div>
        <div className="card  card5">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/*   <img src='https://themewagon.github.io/ogani/img/featured/feature-8.jpg' alt="img3" /> */}
        </div>
        <div className="card  card6">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/*  <img src='https://themewagon.github.io/ogani/img/featured/feature-6.jpg' alt="img3" /> */}
        </div>
        <div className="card  card7">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/* <img src='https://themewagon.github.io/ogani/img/featured/feature-7.jpg' alt="img3" /> */}
        </div>
        <div className="card  card8">
          <div className="Hover">
            <ul>
              <li><a href=""><FavoriteIcon /></a></li>
              <li><a href=""><Send /></a></li>
              <li><a href=""><ShoppingCartIcon /></a></li>
            </ul>
          </div>
          {/*  <img src='https://themewagon.github.io/ogani/img/featured/feature-1.jpg' alt="img3" /> */}
        </div>
      </div>
      <div className="banner_pics">
        <div className="Heading">
          <h1 style={{ display: 'block', margin: 'auto' }}>Summer Vegetable And Fruits</h1>
          <p1 className='p1'></p1>
          <p2 className='p2'></p2>
        </div>

        <div className="banner-Pic1">
          <h2>Summer Vegetable </h2>


          {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt="d" /> */}
          <button>Order Now</button>
        </div>
        <div className="banner-Pic2">
          <h2>Summer Fruits </h2>
          {/*  <img src='https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="d" /> */}
          <button>Order Now</button>
        </div>
      </div>

      <div className="Products">
        <div className="Letest-Product"><h1>Letest Product</h1></div>
        <div className="Top-Rated-Product"><h1>Top-Rated-Product</h1></div>
        <div className="Review-Product"><h1>Review-Product</h1></div>
      </div>


      <Footer />
    </>
  )
}
