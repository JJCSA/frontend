import React, { Component } from 'react'
// import connect from "../../public/assets/images/connect.png"
// import engage from "../../public/assets/images/engage.png"
// import getHelp from "../../public/assets/images/getHelp.png"
// import planAndAdvice from "../../public/assets/images/planAndAdvice.png"
import './jjcmission.css'
export default class JJCMission extends Component{
    constructor(props) {
        super(props);
        this.state = {
            carddata: []
            // isLoaded: false
        }
        // this.fetchHeadline = this.fetchHeadline.bind(this);
        this.fetchMissionCard = this.fetchMissionCard.bind(this);

    }

    componentDidMount() {
        // this.fetchHeadline();
        this.fetchMissionCard();
    }

    // fetchHeadline(){
    //
    //     fetch("http://localhost:3000/jjcMissionHeading")
    //         .then(res => res.json())
    //         .then(json => {
    //             // console.log("hi", json.tagline)
    //             this.setState({
    //                 tagline:json.tagline,
    //                 // isLoaded:true,
    //             })
    //         })
    //         // .catch(error => this.setState({ error, isLoaded: false }));
    //         // console.log("data here", this.state)
    // }
    fetchMissionCard(){
        fetch("http://localhost:3000/jjcMissionCards")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    carddata: json
                })
            })
    }

    render(){
        const {carddata} = this.state

        const join_now_button = {
            backgroundColor:'#FF4020',
            borderColor:'#FF4020'
        }

        return(
                <div>
                    <div className="container-fluid" id="leftpad" style={{background: "linear-gradient(180deg, #2C5797 0%, #0F2D58 100%)"}}>
                        
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 headtext pb-5">
                            JJC Student Association is there to guide you throughout your journey in the USA
                        </div>
                        
                        <div className="row">
                            {carddata.map(data =>
                                <div className="col-sm-12 col-lg-2 " key={data.id}>
                                    <div className="card mb-5 " style={{borderRadius:'8px'}} >
                                        <img className="card-img pt-4 card_images"  src={data.imagelink} alt="Connect Alumni"/>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{data.cardtitle}</h5>
                                            <p className="card-text"> {data.cardtext}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/*<div className="col-sm-12 col-lg-2">*/}
                            {/*    <div className="card mb-5 rounded-top">*/}
                            {/*          <img className="card-img px-5 pt-3 " src="#" alt="Connect Alumni"/>*/}
                            {/*          <div className="card-body text-center">*/}
                            {/*              <h5 className="card-title">Connect</h5>*/}
                            {/*              <p className="card-text"> Find Alumni in your Course and Universities</p>*/}
                            {/*          </div>*/}
                            {/*      </div>*/}
                            {/*</div>*/}

                            {/*<div className= "col-sm-12 col-lg-2">*/}
                            {/*    <div className="card mb-5">*/}
                            {/*        <img className="card-img px-5 pt-3" src="#" alt="Plan & Advice"/>*/}
                            {/*        <div className="card-body text-center">*/}
                            {/*            <h5 className="card-title">Plan & Advice</h5>*/}
                            {/*            <p className="card-text"> GRE, TOEFL, Loan, Accomodation</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className= "col-lg-2 col-sm-12">*/}
                            {/*    <div className="card mb-5">*/}
                            {/*        <img className="card-img px-5 pt-3" src="#" alt="Get Help"/>*/}
                            {/*        <div className="card-body text-center">*/}
                            {/*            <h5 className="card-title">Get Help</h5>*/}
                            {/*            <p className="card-text"> Job Refferals, Resume Reviews, Cover letter tips</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className= "col-lg-2 col-sm-12">*/}
                            {/*    <div className="card mb-5">*/}
                            {/*        <img className="card-img px-5 pt-3" src="#" alt="Engage"/>*/}
                            {/*        <div className="card-body text-center">*/}
                            {/*            <h5 className="card-title">Engage</h5>*/}
                            {/*            <p className="card-text"> Find a community away from home!</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div> {/*div of cards here */}
                        <form className="form-inline pb-5">
                            <button href="#" className="form-control btn btn-dark btn-block" type="button" style={join_now_button}>Join Student Association Now</button>
                        </form> {/*joining button here */}
                    </div> {/*container ends here */}
                </div>
        );
    }
}