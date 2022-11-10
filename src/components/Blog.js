import React, { useEffect, useState } from "react";
import "../styles.css";
import sanityClient from "../client";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <div className="blog__outerContainer">
      {posts?.length < 1 ? (
        <p>There isn't any published blog posts at this moment.</p>
      ) : (
        <h1>Blog posts</h1>
      )}
      <div className="blog_posts-container">
        {posts?.map((post, i) => {
          return (
            <div className="blog__post" key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt="main hero image" />
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span key={i}>
                  <span>
                    <h3>{post.title}</h3>
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
