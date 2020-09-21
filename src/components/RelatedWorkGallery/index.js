import React from 'react';   
import ServicesData from '../../data/Gallery/gallery' 
import SectionTitle from "../../components/SectionTitles/SectionTitle";


const RelatedWorkGallery = () => {
    return (

        <section className="work-section related_work">
            <div className="container">
 
                {/* Heading */} 
                <SectionTitle 
                    title="Related project"
                    subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ."
                />
                {/* End: Heading */ }  
                <div className="row">
                    
                {
                ServicesData.reverse().slice(0, 4).map(gallery => ( 
                    <div className="col-md-3 col-sm-12">
                        <div className="single-project-item" 
                    style={{backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})` }}>
                            <div className="project-hover">
                                <h6><a href="gallery.html">{gallery.title}</a></h6>
                                <span><a href="single-gallery.html">{gallery.tag}</a></span>
                                <a className="project-link" href="images/work_1.jpg"><i className="icon_image"></i></a>
                            </div>
                        </div>
                    </div>
                ))
                }
                    
                </div>
		    </div>
	    </section> 



 
    );
};

export default RelatedWorkGallery;