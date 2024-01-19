import React from "react";
import "./index.scss";

function RecentBlog() {
  return (
    <div className="recentBlog">
      <div className="recentBlogAll">
        <div className="name">BLOG</div>
        <div className="head">Recent Blog</div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp"
                alt=""
              />
            </div>
            <div className="time">July 7, 2018 Admin</div>
            <div className="desc">
              Even the all-powerful Pointing has no control about the blind
              texts
            </div>
            <div className="foot">
              <div className="read">Read More</div>
              <div className="comment">
                <div className="icon">
                  <i className="fa-solid fa-message"></i>
                </div>
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg.webp"
                alt=""
              />
            </div>
            <div className="time">July 7, 2018 Admin</div>
            <div className="desc">
              Even the all-powerful Pointing has no control about the blind
              texts
            </div>
            <div className="foot">
              <div className="read">Read More</div>
              <div className="comment">
                <div className="icon">
                  <i className="fa-solid fa-message"></i>
                </div>
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp"
                alt=""
              />
            </div>
            <div className="time">July 7, 2018 Admin</div>
            <div className="desc">
              Even the all-powerful Pointing has no control about the blind
              texts
            </div>
            <div className="foot">
              <div className="read">Read More</div>
              <div className="comment">
                <div className="icon">
                  <i className="fa-solid fa-message"></i>
                </div>
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
