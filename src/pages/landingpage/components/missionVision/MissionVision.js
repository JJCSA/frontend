import React from 'react';
import './MissionVision.scss';


const MissionVision = () => {
  return (
    //main mission & Vision
    <div id="mission-vision" className="Mission-Vision"> 

        {/* frame 3 */}
        <div className='missionvissionimage'> 
        {/* <h4 className='missionvissionheader'>
            Vision and Mission
        </h4>   */}
        </div>
        
        {/* frame 1 */}
        <div className='visionframe'>
            <h4 className='Vision'> 
                Our Vision 
            </h4>
            <p className='visioncontent'>
                To be an inclusive Jain organisation in the United States that provides support, guidance, and valuable resources to students and alumni.
            </p>
        </div>

        {/* frame 2 */}
        <div className='missionframe'>
            <h4 className='Mission'>
                Our Mission
            </h4>
            <p className='missioncontent'>
            Our mission is to provide a platform to facilitate community engagement amongst Jain students and alumni across the United 
            States. We help members attain professional growth by organising events and interactive Q and A’s. We also enable social 
            support systems to navigate through transitions in the USA.
            </p>
        </div>

        {/* externalobjective frame 1 */}
        <div className='externalobjectiveframe'>
            <h4 className='externalobjective'>
                External Objectives
            </h4>
            <p className='externalobjectivecontent'>
            <ol>
            <li>Provide opportunities to build social connections through local meet-ups, virtual events, and social media groups.</li>                                                    
            <li>Create opportunities for professional growth and career development through events like “alumni symposiums” and “tips to ace your interview” etc.</li>
            <li>Ease transitions for new students coming to the United States of America by facilitating programs like buddy project</li>
            <li>Strengthen the community by creating associations with fellow Jain organisations.</li>
            </ol>
            </p>
        </div>
        
    </div>
  );
}

export default MissionVision;
