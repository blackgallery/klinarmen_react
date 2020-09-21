import React from 'react';
import Leaf from '../../UI/Carousel/leaf'
import testimonialData from '../../../data/Testimonials/home-one'
import TestimonialItem from  './TestimonialItem'
import SectionTitle from "../../SectionTitles/SectionTitle";

import testimonialBg from '../../../assets/images/testimonial.jpg' 
 
 
    const Testimonials = () => {

        const settings = {
            arrows:false,
            dots:true, 
            autoCycle:false, 
            slidesToScroll:1,
            slidesToShow:1, 
            animationDuration:1000, 
            slidesSpacing:0
        };

        return (

            <section className="testimonials-section" style={{backgroundImage: `url("${testimonialBg}")`}} > 
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-5 col-sm-12">	
                            {/* Heading */} 
                            <SectionTitle 
                                title="What our clients Say"
                                subtitle="Lorem ipsum dolor sit ametet verear info omnr noluisse eumdi congue refor midans was at atomorum his idpri te hinc after at expetendasts sit ametet verear info omnr noluisse eumdiam congue noluisse eumdi congue."
                            />
                            {/* End: Heading */ }  
                        </div>  

                        <div className="col-md-7 col-sm-12"> 

                            <Leaf settings={settings}>
                                {
                                    testimonialData.map(testimonial => (
                                        
                                        <TestimonialItem
                                            key={testimonial.id}
                                            author={testimonial.author}
                                            authorThumb={testimonial.authorThumb} 
                                            quote={testimonial.quote} 
                                            designation={testimonial.designation} 
                                        />

                                    ))
                                }
                            </Leaf>

                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default Testimonials;