import React, { Component } from 'react'
import './newsupdates.css'
export default class NewsUpdates extends Component{

    render(){
        const know_more_button = {
            // height: '40px',
            borderColor:'#FF4020',
            color:'#FF4020'
        }
        const card_image = {
            borderRadius:'8px',
            backgroundColor:'#F6F6F6'
        }
        return (
            <div className="container-fluid ">
                <div className='row d-flex ml-5'>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className=" mt-3">
                        <div className="card border-0">
                            <div className="card-horizontal">
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" style={card_image}>
                                    {/*<img className="" src="http://via.placeholder.com" alt="Card image cap"/>*/}
                                </div>

                                <div className="col-lg-10">
                                    <div className="card-body">
                                        <h4 className="card-title">Future events</h4>
                                        <p className="card-text ">2nd JJC SA USA Conference. August 11, 2020 marked the 1st Anniversary for JJC SA USA. To commemorate this occasion there is a celebration to be held virtually on September 12th, 2020.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className=" mt-3">
                        <div className="card border-0">
                            <div className="card-horizontal">
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" style={card_image}>
                                    {/*<img className="" src="http://via.placeholder.com/" alt="Card image cap"/>*/}
                                </div>
                                <div className="col-lg-10">
                                <div className="card-body">
                                    <h4 className="card-title">Buddy Project</h4>
                                    <p className="card-text">The purpose of this project is to have points of contacts throughout the US. There will be defined hours for the week wherein JJC SA USA members will have the opportunity to ask questions that they might have regardless of the topics. Details to follow soon.</p>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                <div className='row d-flex ml-5'>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className=" mt-3">
                            <div className="card border-0">
                                <div className="card-horizontal">
                                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" style={card_image}>
                                        {/*<img className="" src="http://via.placeholder.com" alt="Card image cap"/>*/}
                                    </div>

                                    <div className="col-lg-10">
                                        <div className="card-body">
                                            <h4 className="card-title">Newsletter</h4>
                                            <p className="card-text">The purpose of this project is to send out frequent newsletters covering a wide range of topics. This will be a platform to spread awareness, share knowledge about various topics etc. Details to follow soon.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">*/}
                    {/*    <div className=" mt-3">*/}
                    {/*        <div className="card border-0">*/}
                    {/*            <div className="card-horizontal">*/}
                    {/*                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12" style={{backgroundColor:"#F6F6F6"}}>*/}
                    {/*                    /!*<img className="" src="http://via.placeholder.com/" alt="Card image cap"/>*!/*/}
                    {/*                </div>*/}
                    {/*                <div className="col-lg-4">*/}
                    {/*                    <div className="card-body">*/}
                    {/*                        <h4 className="card-title">Card title</h4>*/}
                    {/*                        <p className="card-text">Some quick example text to build on the card title and make*/}
                    {/*                            up the bulk of the card's content.</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div style={{textAlign:"center"}}>
                    <button type="button" className="btn mt-5" style={know_more_button}>Load More</button>
                </div>
            </div>
        )
    }
}
