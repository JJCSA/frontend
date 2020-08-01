import React, { Component } from 'react'
import connect from "./images/connect.png"
import engage from "./images/engage.png"
import getHelp from "./images/getHelp.png"
import planAndAdvice from "./images/planAndAdvice.png"
import './jjcmission.css'
export default class JJCMission extends Component{
    render(){
      const join_now_button = {
        // height: '40px',
        backgroundColor:'#FF4020',
        borderColor:'#FF4020'
      }
        return(
                <div>
                    <div className="container-fluid pl-sm-5" style={{background: "linear-gradient(180deg, #2C5797 0%, #0F2D58 100%)"}}>
                        
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 headtext pt-5 pb-3">
                        JJC Student Association is there to guide you throughout your journey in the USA
                        </div>
                        
                        <div className="row">
                            
                            <div className="col-sm-12 col-lg-2">
                                <div className="card mb-5">
                                      <img className="card-img px-5 pt-5" src={connect} alt="Connect Alumni"/>
                                      <div className="card-body text-center">
                                          <h5 className="card-title">Connect</h5>
                                          <p className="card-text"> Find Alumni in your Course and Universities</p>
                                      </div>
                                  </div>
                            </div>

                            <div className= "col-sm-12 col-lg-2">
                                <div className="card mb-5">
                                    <img className="card-img px-5 pt-5" src={engage} alt="Plan & Advice"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Plan & Advice</h5>
                                        <p className="card-text"> GRE, TOEFL, Loan, Accomodation</p>
                                    </div>
                                </div>
                            </div>

                            <div className= "col-lg-2 col-sm-12">
                                <div className="card mb-5">
                                    <img className="card-img px-5 pt-5" src={getHelp} alt="Get Help"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Get Help</h5>
                                        <p className="card-text"> Job Refferals, Resume Reviews, Cover letter tips</p>
                                    </div>
                                </div>
                            </div>

                            <div className= "col-lg-2 col-sm-12">
                                <div className="card mb-5">
                                    <img className="card-img px-5 pt-5" src={planAndAdvice} alt="Engage"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Engage</h5>
                                        <p className="card-text"> Find a community away from home!</p>
                                    </div>
                                </div>
                            </div>

                        </div> {/*div of cards here */}
                        <form className="form-inline pb-5">
                            <button href="#" className="form-control btn btn-dark btn-block" type="button" style={join_now_button}>Join Student Association Now</button>
                        </form> {/*joining button here */}
                    </div> {/*container ends here */}
                </div>
        );
    }
}