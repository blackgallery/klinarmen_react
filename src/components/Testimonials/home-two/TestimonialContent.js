import React from 'react';
import testimonialData from '../../../data/Testimonials/home-two'
import TestimonialItem from  './TestimonialItem'
import SectionTitle from "../../SectionTitles/SectionTitleTwo";
import Leaf from '../../UI/Carousel/leaf'

/* Baclground Image */
import testimonialBg from '../../../assets/images/testimonial.jpg' 
 

    const Testimonials = () => {

        const settings = {
            arrows:false,
            dots:true, 
            autoCycle:false, 
            slidesToScroll:1,
            slidesToShow:2, 
            animationDuration:1000, 
            slidesSpacing:0,
            breakpoints : 
            [
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                }
            ]
        };
 
        return (

            <section className="testimonials-section testimonials_sec_v2" style={{backgroundImage: `url("${testimonialBg}")`}} > 
                <div className="container"> 
                    <div className="row">
                        <div className="col-sm-12">	
                            {/* Heading */} 
                            <SectionTitle 
                                title="What our clients Say"
                                subtitle="Lorem ipsum dolor sit ametet verear info omnr noluisse eumdi congue refor midans was at atomorum his idpri te hinc after at expetendasts sit ametet verear info omnr noluisse eumdiam congue noluisse eumdi congue."
                            />
                            {/* End: Heading */ }  
                        </div>  

                        <div className="col-sm-12"> 

                            
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