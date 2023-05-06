import React from 'react'
import All from './All'
import Footer from './Footer'
import './Blog.css'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import SearchIcon from '@mui/icons-material/Search';
export default function Blog() {
  return (
    <>
      <All />
      <div className="Blog-BackGround">
        <div className="info">

          <h1 style={{ fontWeight: '700', fontSize: '50px', margin: '0' }}>Blog</h1>
          <span><h4 style={{ margin: '0' }}>Home- Blog</h4></span>
        </div>
      </div>
      <div className="Blog-detail">
        <div className="left">
          <input type="text" placeholder='Search' />
          <p style={{ position: 'relative', bottom: '57px', left: '285px' }}><SearchIcon /></p>
          <div className="Blog-Category">
            <p>Categaries</p>
            <ul>
              <li>All</li>
              <li>Beauty (20)</li>
              <li>Food(5)</li>
              <li>Life Style(9)</li>
              <li>Travel(16)</li>
            </ul>
          </div>
          <div className="recent-news">
            <h1>Recent News</h1>
            <div className="news news1">
              <img src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-1.jpg" alt="" />

              <div className="news-new">

                <p>09 kinds of Vegetable Protect your Liver</p>
                <p1>MAR 05,2022</p1>
              </div>

            </div>
            <div className="news news2">
              <img src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-2.jpg" alt="" />
              <div className="news-new">

                <p>Tips you to balance Nutrition meal Day </p>
                <p1>MAR 05,2022</p1>
              </div>
            </div>
            <div className="news news3">
              <img src="https://themewagon.github.io/ogani/img/blog/sidebar/sr-3.jpg" alt="" />
              <div className="news-new">

                <p>04 Principles helps you to Loose Weight  with Vegetable</p>
                <p1>MAR 05,2022</p1>
              </div>
            </div>
          </div>

          <div className="SearchBy">
            <h2>Search By</h2>
            <div className="buttons">
              <button>Apple</button>
              <button>Beauty</button>
              <button>Vegetable</button>
              <button>Fruits</button>
              <button>Healthy Food</button>
            </div>

          </div>







        </div>
        <div className="right">
          <div className="right-newses">
            <div className="card34 card-1">
              <img src="https://themewagon.github.io/ogani/img/blog/blog-2.jpg" alt="" />
              <p style={{ display: 'inline-block' }}>May23,2020 </p> <span>Comment5</span>
              <h3>6 ways to prepare breakfast for 30</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>

              <button> READ MORE  <TrendingFlatIcon /></button>
            </div>
            <div className="card34 card-2">
              <img src="https://themewagon.github.io/ogani/img/blog/blog-3.jpg" alt="" />
              <p style={{ display: 'inline-block' }}>May23,2020 </p> <span>Comment5</span>
              <h3>6 ways to prepare breakfast for 30</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              <button> READ MORE  <TrendingFlatIcon /></button>
            </div>
            <div className="card34 card-2">
              <img src="https://themewagon.github.io/ogani/img/blog/blog-4.jpg" alt="" />
              <p style={{ display: 'inline-block' }}>May23,2020 </p> <span>Comment5</span>
              <h3>6 ways to prepare breakfast for 30</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              <button> READ MORE  <TrendingFlatIcon /></button>
            </div>
            <div className="card34 card-2">
              <img src="https://themewagon.github.io/ogani/img/blog/blog-5.jpg" alt="" />
              <p style={{ display: 'inline-block' }}>May23,2020 </p> <span>Comment5</span>
              <h3>6 ways to prepare breakfast for 30</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              <button> READ MORE  <TrendingFlatIcon /></button>
            </div>
            <div className="card34 card-2">
              <img src="https://themewagon.github.io/ogani/img/blog/blog-6.jpg" alt="" />
              <p style={{ display: 'inline-block' }}>May23,2020 </p> <span>Comment5</span>
              <h3>6 ways to prepare breakfast for 30</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              <button> READ MORE  <TrendingFlatIcon /></button>
            </div>
            <div className="card34 card-2">
              <img src="https://themewagon.github.io/ogani/img/blog/blog-1.jpg" alt="" />
              <p style={{ display: 'inline-block' }}>May23,2020 </p> <span>Comment5</span>
              <h3>6 ways to prepare breakfast for 30</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              <button> READ MORE  <TrendingFlatIcon /></button>
            </div>

          </div>

          <hr />
          <div className="next-pages">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><p><TrendingFlatIcon /></p></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
