import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

export const SEO = ({ title, description = "Blueprint-styled engineer portfolio.", canonical = "/" }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      {description && (
        <meta property="og:description" content={description} />
      )}
    </Helmet>
  );
};

export default SEO;
