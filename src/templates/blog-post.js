import React from "react";
import Helmet from "react-helmet";

// import ../css/blog-post/css; // TODO

export default function Template({
  data, //this prop will be injected by the GraphQL query
}) {
  const { markdownRemark: post } = data; //data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={'MovieDev - ${post.formatter.title}'} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql` 
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
