import React, { useEffect, useState } from "react";
import "../styles.css";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const BlogPost = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const { slug } = useParams();

  console.log(slug, slug);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`,
        { slug }
      )
      .then((data) => setCurrentPost(data[0]))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!currentPost) return <div>Loading...</div>;
  return (
    <div className="blogpost__outerContainer">
      <div className="blogpost__topSection">
        <div className="blogpost__info-container">
          <div>
            <img
              src={urlFor(currentPost.authorImage).width(100).url()}
              alt="author is Sergen"
              className="blogpost__author-img"
            />
          </div>
          <div>
            <h4 className="blogpost__author-name">{currentPost.name}</h4>
            <h4 className="blogpost__author-name">
              {currentPost.publishedAt.slice(0, 10)}
            </h4>
          </div>
        </div>
        <img
          src={urlFor(currentPost.mainImage).width(200).url()}
          alt="main image of post"
          className="blogpost__mainImage"
        />
      </div>

      <div className="blogpost__bodyContainer">
        <h2>{currentPost.title}</h2>
        <BlockContent
          blocks={currentPost.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
          className="blogpost__body"
        />
      </div>
    </div>
  );
};

export default BlogPost;
