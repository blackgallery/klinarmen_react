import React from 'react';  
import InfiniteCarousel from 'react-leaf-carousel';


function Carousel({children,settings}) {
    return (
        <InfiniteCarousel {...settings}>
            {children} 
        </InfiniteCarousel>
    );
}

export default Carousel;