import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import GalleryDetails from "../templates/GalleryDetails/index";

const galleryPage = () => {
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

		    <GalleryDetails />

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default galleryPage;



