import React, {Component} from 'react'
import './aboutus.css'
export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            aboutusdata: {}
        })
        this.fetchAboutUs = this.fetchAboutUs.bind(this);
    }

    componentDidMount() {
        this.fetchAboutUs();
    }
    fetchAboutUs(){
        fetch("http://localhost:3000/aboutus")
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    aboutusdata:json
                })
            })
    }

    render(){
        const {aboutusdata} = this.state

        const know_more_button = {
            // height: '40px',
            borderColor:'#FF4020',
            color:'#FF4020'
        }
        return(
            <div className="card p-3 m-3 border-0 ">
                <div className="row" key={aboutusdata.id}>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <img className="card-img" src="http://localhost:3001/assets/images/aboutUs.png" alt="About Us"/>
                    </div>  {/*  image col here */}
            
                    <div className="col-lg-8">
                        <div className="card-body" >
                            <h5 className="card-title" style={{textAlign:'justify'}}>JJC Student Association USA</h5>

{/*                            <pre className="card-text" style={{textAlign:'justify'}}> JJC SA USA is a branch of Jain Jagruti Center Central Board & Charitable Trust founded in order to connect with and help Jain Students/Alumni*/}
{/*residing in the United States.</pre>*/}
{/*                            <pre className="card-text" style={{textAlign:'justify'}}> Mission,Vision and Core Values:</pre>*/}
{/*                            <pre className="card-text" style={{textAlign:'justify'}}> 1. Include Every Jain Student no matter what Jain Pillar they belong.</pre>*/}
                            <p className="card-text" style={{textAlign:'justify'}}> JJC SA USA is a branch of Jain Jagruti Center Central Board & Charitable Trust founded in order to connect with and help Jain Students/Alumni
                                residing in the United States.</p>

                            <p className="card-text" style={{textAlign:'justify'}}> Mission, Vision and Core Values:</p>

                            <ul>
                                <li>Include Every Jain Student no matter what Jain Pillar they belong.</li>
                                <li>Empower Students through Career Development and Mentorship Program.</li>
                                <li>Build a Search Engine for Engagement and Connections between Students and Alumnis</li>
                                <li>Leverage Digital Media Services to share knowledge about Jain Community</li>
                            </ul>

                            <button type="button" className="btn" style={know_more_button}>Know More</button>
                        </div> {/*card body col here */}
                    </div> {/*text col here */}
                </div> {/*  row div here */}
          
            </div>

        );
    }
}