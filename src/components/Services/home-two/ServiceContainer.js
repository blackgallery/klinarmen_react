import React from 'react';
import Leaf from '../../UI/Carousel/leaf'
import ServicesData from '../../../data/Services/service-one.json' 
import ServiceItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitleTwo";


const Service = (props) => { 

    const settings = {
        arrows:false,
        dots:true, 
        autoCycle:true, 
        slidesToScroll:1,
        slidesToShow:3, 
        animationDuration:1000, 
        slidesSpacing:0,
        breakpoints : 
        [
            {
              breakpoint: 761,
              settings: {
                slidesToShow: 1
              },
            },
            {
              breakpoint: 995,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            }
        ]
    };
 
        return (

        <section className="service_section service_sec_v2">
            <div className="container"> 
                {/* Heading */}
                <SectionTitle
                    title="Our Services"
                    subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
                />
                {/* End: Heading */}

                <div className="row"> 

                <div className="col"> 
                    <Leaf settings={settings}>
                        {
                            ServicesData.map(service => (
                                <ServiceItem 
                                key={service.id} 
                                id={service.id} 
                                title={service.title}  
                                thumb={service.thumb} 
                                btnText={service.btnText} 

                                />
                            ))
                        }
                    </Leaf>

                </div> 
                </div> 
            </div> 
        </section>    
        );
    }
;

export default Service;