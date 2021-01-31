import React, { Component } from "react";
import "./NewsFeed.scss";

class NewsFeed extends Component {
  render() {
    return (
      <div>
        <div className="text-center mt-5">
          <h4>News Feed</h4>
          <hr className="news-feed"></hr>
        </div>
        <div className="container-fluid ">
          <div className="row d-flex ml-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className=" mt-3">
                <div className="card border-0">
                  <div className="card-horizontal">
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                      {/*<img className="" src="http://via.placeholder.com" alt="Card image cap"/>*/}
                    </div>

                    <div className="col-lg-10">
                      <div className="card-body">
                        <h4 className="card-title">Future events</h4>
                        <p className="card-text ">
                          2nd JJC SA USA Conference. August 11, 2020 marked the
                          1st Anniversary for JJC SA USA. To commemorate this
                          occasion there is a celebration to be held virtually
                          on September 12th, 2020.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
