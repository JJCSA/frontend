import React, { Component } from 'react'
import './ongoinginitiatives.css'
// import $ from "jquery"
// import planAndAdvice from "./images/planAndAdvice.png"
import $ from 'jquery'
export default class OngoingInitiativesCarousel extends Component{

    constructor(props) {
        super(props);
        // this.state = ({
        //     initiativesdata: []
        // })
        // this.fetchInitiativesCard = this.fetchInitiativesCard.bind(this);
        // this.jqueryCarousel = this.jqueryCarousel.bind(this);
    }
    componentDidMount() {
        $(document).ready(function (){
            $('#carouselExample').on('slide.bs.carousel', function (e){
                let $e = $(e.relatedTarget);
                let idx = $e.index();
                let itemsPerSlide = 3;
                let totalItems = $(".carousel-item").length;
                if (idx >= totalItems - (itemsPerSlide - 1)) {
                    let it = itemsPerSlide - (totalItems - idx);
                    for (let i = 0; i < it; i++) {
                        // append slides to end
                        if (e.direction == "left") {
                            $(".carousel-item")
                                .eq(i)
                                .appendTo(".carousel-inner");
                        } else {
                            $(".carousel-item")
                                .eq(0)
                                .appendTo($(this).find(".carousel-inner"));
                        }
                    }
                }
            });
        });
    }

    //
    // componentDidMount() {
    //     this.fetchInitiativesCard()
    //     this.jqueryCarousel()
    // }
    // jqueryCarousel(){
    //
    // }
    // fetchInitiativesCard(){
    //     // console.log("hi : data here")
    //     fetch("http://localhost:3000/ongoingInitiatives")
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 initiativesdata: json
    //             })
    //         })
    // }

    render() {
        // const {initiativesdata} = this.state
        // console.log(initiativesdata);

        const load_more_button = {
            borderColor:'#FF4020',
            color:'#FF4020'
        }

        const know_more_button = {

            color:'#FF4020'
        }
        return(
            <div className="container-fluid " style={{background: "linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%)"}}>

                <div id="carouselExample" className="carousel slide " data-ride="carousel" >
                    <div className="carousel-inner row w-100 pt-5" role="listbox">

                            <div className="carousel-item col-md-4 active">
                                <div className="card mx-auto border-0 " style={{borderRadius:'8px'}} >
                                    <div>
                                        <img className="card-img-top img-fluid d-bloc p-0" src="//placehold.it/600x400?text=1"
                                             alt="slide 1"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">title</h4>
                                        <a href='#' style={know_more_button}>Know More > </a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item col-md-4">
                                <div className="card mx-auto border-0 " style={{borderRadius:'8px'}} >
                                    <img className="card-img-top img-fluid d-block p-0" src="//placehold.it/600x400?text=2"
                                         alt="slide 2"/>
                                    <div className="card-body">
                                        <h4 className="card-title">title</h4>
                                        <a href='#' style={know_more_button}>Know More > </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item col-md-4">
                                <div className="card mx-auto border-0 " style={{borderRadius:'8px'}} >
                                    <img className="img-fluid img-fluid d-block p-0" src="//placehold.it/600x400?text=3"
                                         alt="slide 3"/>
                                    <div className="card-body">
                                        <h4 className="card-title">title</h4>
                                        <a href='#' style={know_more_button}>Know More > </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item col-md-4">
                                <div className="card mx-auto border-0 " style={{borderRadius:'8px'}} >
                                    <img className="img-fluid img-fluid d-block p-0" src="//placehold.it/600x400?text=4"
                                         alt="slide 4"/>
                                    <div className="card-body">
                                        <h4 className="card-title">title</h4>
                                        <a href='#' style={know_more_button}>Know More > </a>
                                    </div>

                                </div>
                            </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                        <i className="fa fa-chevron-left fa-lg text-muted"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next text-faded" href="#carouselExample" role="button"
                       data-slide="next">
                        <i className="fa fa-chevron-right fa-lg text-muted"/>
                        <span className="sr-only">Next</span>
                    </a>
                    <div style={{textAlign:"center"}} className="my-5">
                        <button type="button" className="btn" style={load_more_button}>Donate Now</button>
                    </div>
                </div>

            </div>
        )
    }
}