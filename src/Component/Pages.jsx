import React from 'react'
import All from './All'
import Footer from './Footer'
import './Blog.css'
import './Home.css'
import './Pages.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Send from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export default function Pages() {
  return (
    <>
      <All />
      <div className="Pages-BackGround">
        <div className="info">

          <h1 style={{ fontWeight: '700', fontSize: '50px', margin: '0' }}>Pages</h1>
          <span><h4 style={{ margin: '0' }}>Home- Page</h4></span>


        </div>
      </div>

      <div className="Pages-detail">
        <div className="page-left">
          <img src="https://themewagon.github.io/ogani/img/product/details/product-details-1.jpg" alt="" />
        </div>
        <div className="page-right">
          <h2>Vegetable's Package</h2>
          <p className='review'><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /> <span>(18 review)</span></p>
          <p className='price'>$50.00</p>
          <div className="info-detail">
            sit amet consectetur adipisicing elit. Quasi, corporis consequuntur magni maxime dicta amet odio eveniet. Est, ducimus quis.
          </div>
          <div className="optional">
            <div className="pro-quantity">
              <div className="incre">+</div>
              <input type="text" placeholder='1' />
              <div className="decre">-</div>
            </div>

            <div className="addto">
              <p>ADD TO CARD</p>
            </div>

            <div className="fav-icon">
              <p><FavoriteIcon /></p>
            </div>
          </div>


          <hr />
          <div className="product-info">
            <div className="left">
              <ul>
                <li>Availability</li>
                <li>Shipping</li>
                <li>Weight</li>
                <li>Share on</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>In Stock</li>
                <li>01 day Shipping <code>Free Pickup Today</code></li>
                <li>0.5 kg</li>
                <li>
                  <span><TwitterIcon /></span>
                  <span><InstagramIcon /></span>
                  <span><FacebookOutlinedIcon /> </span>
                  <span><WhatsAppIcon /> </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div >

      <div className="PRO-INFO">
        <div className="product-information">
          <h3>Product Information</h3>
          <p >
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
          </p>

        </div>

        <div className="realated-product">
          <h1>Related Product</h1>
          <div className="cards">

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
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
