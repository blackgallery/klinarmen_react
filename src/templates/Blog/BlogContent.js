import React, { Fragment } from "react";     
import BlogData from '../../data/Blog/blog'

const BlogContentWrap = () => {
    return (
        <Fragment>

            <div className="col-md-8 col-sm-12 blog-area">
                {
                    BlogData.reverse().slice(0,3).map(post=>(
                        <div className="blog-warp-1 blog_warp_lay_1">
                            <div className="blog_imgg"> 
                                <img src={require('../../assets/images/' + post.thumb)} alt="service" />
                            </div>
                            <div className="blog_content_warp">
                                <a href="#/" className="blog_datee"><i className="fa fa-calendar"></i>  {post.publishDate} </a>
                                <a href="#/" className="subtext"><i className="fa fa-tag"></i> {post.tag} </a>
                                <a href={`${process.env.PUBLIC_URL + `/blog/${post.title.split(' ').join('-').toLowerCase()}?id=${post.id}`}`} className="subtext"><i className="fa fa-comment-o"> </i>  {post.commentCount} </a>
                                <h5><a href={`${process.env.PUBLIC_URL + `/blog/${post.title.split(' ').join('-').toLowerCase()}?id=${post.id}`}`}> {post.title}</a></h5>
                                <p> {post.content}  </p>
                            </div>
                        </div>
                    ))
                }

                { /* Blog Pagination */}
                <div class="pagination_wrap">
                    <nav class="pagination">
                        <ul class="pager">
                            <li><a href="#/">&lt;</a></li>
                            <li><a href="#/">01</a></li>
                            <li class="pagi-big"><a href="#/"> 02 </a></li>
                            <li><a href="#/">03</a></li>
                            <li><a href="#/">&gt;</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
            { /* End: Left Side :Blog Post */}

        </Fragment>
    );
};

export default BlogContentWrap;