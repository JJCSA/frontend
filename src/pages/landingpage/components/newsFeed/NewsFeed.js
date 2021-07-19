import React from 'react';
import './NewsFeed.scss';
import ScrollAnimation from "react-animate-on-scroll";

function NewsFeed() {
  return (
    <div className="NEWSFEED" id="news-feed">
      <div className="text-center mt-5">
        <ScrollAnimation animateIn="zoomIn" duration={2}>
        <h4>News Feed</h4>
        </ScrollAnimation>
        <hr className="news-feed" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimation animateIn='bounceInLeft' duration={2}>
            <div className="card news-card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://via.placeholder.com/150" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Food Assistance for Students during COVID-19 Pandemic.</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text read-more" data-toggle="modal" data-target="#newsDetailModal">Read More &gt;</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
            <ScrollAnimation animateIn='bounceInRight' duration={2}>
            <div className="card news-card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://via.placeholder.com/150" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Food Assistance for Students during COVID-19 Pandemic.</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text read-more" data-toggle="modal" data-target="#newsDetailModal">Read More &gt;</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
            <ScrollAnimation animateIn='bounceInLeft' duration={2}>
            <div className="card news-card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://via.placeholder.com/150" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Food Assistance for Students during COVID-19 Pandemic.</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text read-more" data-toggle="modal" data-target="#newsDetailModal">Read More &gt;</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="modal fade" id="newsDetailModal" tabIndex="-1" role="dialog" aria-labelledby="newsDetailModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Food Assistance for Students during COVID-19 Pandemic.</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
