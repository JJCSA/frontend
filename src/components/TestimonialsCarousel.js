import React, { Component } from 'react'
import './testimonials.css'



export default class TestimonialsCarousel extends Component{
    render() {

        return(
            <div className="container-fluid ">

                <div id="testimonialcarousel" className="carousel slide " data-ride="carousel" data-interval="9000">

                    <div className="carousel-inner row w-100 mx-auto" role="listbox">

                        <div className="carousel-item col-md-3 active" >
                            <div className="card " style={{backgroundColor:"#F6F6F6"}}>
                                <div className="card-body">
                                    <h4 className="card-title">Card 1</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item col-md-3">
                            <div className="card mx-auto " style={{backgroundColor:"#F6F6F6"}}>
                                <div className="card-body">
                                    <h4 className="card-title">Card 2</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item col-md-3">
                            <div className="card mx-auto " style={{backgroundColor:"#F6F6F6"}}>
                                <div className="card-body">
                                    <h4 className="card-title">Card 3</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-3">
                            <div className="card mx-auto " style={{backgroundColor:"#F6F6F6"}}>
                                <div className="card-body">
                                    <h4 className="card-title">Card 4</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>

                        {/*<div className="carousel-item col-md-4">*/}
                        {/*    <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=4"*/}
                        {/*         alt="slide 4"/>*/}
                        {/*    <h4 className="card-title">Card 1</h4>*/}
                        {/*    <p className="card-text">This is a longer card with supporting text below as a natural*/}
                        {/*        lead-in to additional content. This content is a little bit longer.</p>*/}
                        {/*    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item col-md-4">*/}
                        {/*    <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=5"*/}
                        {/*         alt="slide 5"/>*/}
                        {/*    <h4 className="card-title">Card 1</h4>*/}
                        {/*    <p className="card-text">This is a longer card with supporting text below as a natural*/}
                        {/*        lead-in to additional content. This content is a little bit longer.</p>*/}
                        {/*    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item col-md-4">*/}
                        {/*    <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=6"*/}
                        {/*         alt="slide 6"/>*/}
                        {/*    <h4 className="card-title">Card 1</h4>*/}
                        {/*    <p className="card-text">This is a longer card with supporting text below as a natural*/}
                        {/*        lead-in to additional content. This content is a little bit longer.</p>*/}
                        {/*    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item col-md-4">*/}
                        {/*    <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=7"*/}
                        {/*         alt="slide 7"/>*/}
                        {/*    <h4 className="card-title">Card 1</h4>*/}
                        {/*    <p className="card-text">This is a longer card with supporting text below as a natural*/}
                        {/*        lead-in to additional content. This content is a little bit longer.</p>*/}
                        {/*    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item col-md-4">*/}
                        {/*    <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=8"*/}
                        {/*         alt="slide 8"/>*/}
                        {/*    <h4 className="card-title">Card 1</h4>*/}
                        {/*    <p className="card-text">This is a longer card with supporting text below as a natural*/}
                        {/*        lead-in to additional content. This content is a little bit longer.</p>*/}
                        {/*    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        {/*</div>*/}
                    </div>
                    <a className="carousel-control-prev" href="#testimonialcarousel" role="button" data-slide="prev">
                        <i className="fa fa-chevron-left fa-lg text-muted"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#testimonialcarousel" role="button"
                       data-slide="next">
                        <i className="fa fa-chevron-right fa-lg text-muted"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}