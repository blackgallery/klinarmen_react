import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Team from '../components/Team/TeamContainer'; 
import PageHeader from '../components/PageHeader'


const TeamPage = ( ) => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>FuodBorne | About</title>
              <meta
                name="description"
                content="Organic Food React JS Template."
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={require('../assets/images/page_bg.jpg')}
                    title="Our Experts" 
                />
  
				<Team classes="team_page" />
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default TeamPage;   