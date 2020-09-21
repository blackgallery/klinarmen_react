import React from 'react';   
import ServicesData from '../../data/Services/service-one'

const RelatedServices = () => {
    return (
    <div className="related-service-area">
        <div className="container">
            <div className="row">
                {
                ServicesData.reverse().slice(0, 2).map(service => ( 
                    <div className="col-sm-6 col-xs-12">
                        <div className="service_list">
                            <div className="service_list_img"> 
                                <img src={require('../../assets/images/' + service.thumb)} alt="service" />
                                <div className="service_info">
                                    <h6> {service.title} </h6>
                                    <p>{service.shortDesc}</p>
                                </div>
                            </div>
                        </div> 

                    </div>
                ))
                }
            </div>
        </div>
    </div>
    );
};

export default RelatedServices;