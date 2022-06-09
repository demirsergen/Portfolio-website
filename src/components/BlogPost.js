import React, { useEffect, useState } from "react";
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
    <div>
      <div>
        <h2>{currentPost.title}</h2>
        <div>
          <img
            src={urlFor(currentPost.authorImage).width(100).url()}
            alt="author is Sergen"
          />
          <h4>{currentPost.name}</h4>
        </div>
      </div>
      <img
        src={urlFor(currentPost.mainImage).width(200).url()}
        alt="main image of post"
      />
      <div>
        <BlockContent
          blocks={currentPost.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </div>
    </div>
  );
};

export default BlogPost;
