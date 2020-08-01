import React, {Component} from 'react'
import aboutUs from './images/aboutUs.png'
import './aboutus.css'
export default class AboutUs extends Component {

    render(){
        const know_more_button = {
            // height: '40px',
            borderColor:'#FF4020',
            color:'#FF4020'
        }
        return(
            <div className="card p-3 m-3 border-0 box_shadow">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <img className="card-img" src={aboutUs} alt="About Us"/>
                    </div>  {/*  image col here */}
            
                    <div className="col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title" style={{textAlign:'justify'}}>Jain Jagruti Centre. Not just a name. But an institution that stand as a symbol of philanthropic objectives and fulfillments for the Jain community, at large. Once an entertainment provider of various cultural programs for the community, today the organization proactively participates in driving serious and meaningful charitable activates, such as Refundable Education of Financial Assistance, Samuh Vivah, Medical Camps and Yuva Melas for needy members of the Jain community.</h5>
                            <p className="card-text" style={{textAlign:'justify'}}> The original thought behind promoting Jain Jagruti Centre was to bring various sections and factions of Jains under one roof. Jain Jagruti Centre. Not just a name. But an institution that stand as a symbol of philanthropic objectives and fulfillments for the Jain community, at large. Once an entertainment provider of various cultural programs for the community, today the organization proactively participates in driving serious and meaningful charitable activates, such as Refundable Education of Financial Assistance, Samuh Vivah, Medical Camps and Yuva Melas for needy members of the Jain community.</p>
                            <button type="button" className="btn" style={know_more_button}>Know More</button>
                        </div> {/*card body col here */}
                    </div> {/*text col here */}
                </div> {/*  row div here */}
          
            </div>

        );
    }
}