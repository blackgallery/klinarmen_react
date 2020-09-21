import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import BlogDetails from "../templates/BlogDetails/index";

const singleBlogPage = () => {
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
 
	       <BlogDetails />		

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default singleBlogPage;



