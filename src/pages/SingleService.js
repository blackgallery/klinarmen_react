import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import ServiceDetails from "../templates/ServiceDetails/index";

const servicePage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>FuodBorne | Home</title>
		  <meta
			name="description"
			content="Organic Food React JS Template."
		  />
		</MetaTags> 
		<LayoutOne>

		    <ServiceDetails />

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default servicePage;



