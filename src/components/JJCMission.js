import React, { Component } from 'react'
import connect from "./images/connect.png"
import engage from "./images/engage.png"
import getHelp from "./images/getHelp.png"
import planAndAdvice from "./images/planAndAdvice.png"

export default class JJCMission extends Component{
    render(){

        return(
                <div>
                    <div className="container-fluid " style={{background: "linear-gradient(180deg, #2C5797 0%, #0F2D58 100%)"}}>


        <div className="text-white pt-5">
          <h3>JJC Student Association is there to guide you</h3>
          <h3>throughout your journey in the USA</h3>
        </div>  {/*container heading */}


        <div className="d-flex pt-3">
        
        
        <div className="card" style={{width:"20rem"}}>
          <img className="card-img mx-auto" src={connect} style={{width:"8rem", maxHeight:"8rem" }} alt="Connect Alumni"/>
          <div className="card-body text-center">
            <h5 className="card-title">Connect</h5>
            <p className="card-text"> Find Alumni in your Course and Universities</p>
          </div>
        </div>

        <div className="card" style={{width:"20rem"}}>
          <img className="card-img mx-auto" src={engage} style={{width:"8rem", maxHeight:"8rem" }} alt="Plan & Advice"/>
          <div className="card-body text-center">
            <h5 className="card-title">Plan & Advice</h5>
            <p className="card-text"> GRE, TOEFL, Loan, Accomodation</p>
          </div>
        </div>

        <div className="card" style={{width:"20rem"}}>
          <img className="card-img mx-auto" src={getHelp} style={{width:"8rem", maxHeight:"8rem" }} alt="Get Help"/>
          <div className="card-body text-center">
            <h5 className="card-title">Get Help</h5>
            <p className="card-text"> Job Refferals, Resume Reviews, Cover letter tips</p>
          </div>
        </div>

        <div className="card" style={{width:"20rem"}}>
          <img className="card-img mx-auto" src={planAndAdvice} style={{width:"8rem", maxHeight:"8rem" }} alt="Engage"/>
          <div className="card-body text-center">
            <h5 className="card-title">Engage</h5>
            <p className="card-text"> Find a community away from home!</p>
          </div>
        </div>

        </div> {/*div of cards here */}

        <div className="pt-3 pb-5">
        <a href="#" className="btn btn-danger">Join Student Association Now</a>
        </div> {/*joining button here */}
      </div> {/*container ends here */}
                </div>
        );
    }
}