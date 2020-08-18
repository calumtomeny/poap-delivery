import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Types
type SEOProps = {
  title?: string;
  description?: string;
};

const SEO: FC<SEOProps> = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  console.log(site.siteMetadata);

  return (
    <Helmet
      title={title || site.siteMetadata.title}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat([])}
    />
  );
};

export default SEO;
