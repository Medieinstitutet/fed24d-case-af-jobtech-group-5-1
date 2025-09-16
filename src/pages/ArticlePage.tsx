import { useParams } from "react-router";
import { articles } from "../data/articles";
import { DigiLink } from "@digi/arbetsformedlingen-react";
import { LinkVariation } from "@digi/arbetsformedlingen";
import "../styles/ArticlePage.scss";

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  if (!article) return <h1>Hittades inte</h1>;


  return (
    <article className="article-content">
        <div>
        <DigiLink
            afHref="/"
            afVariation={LinkVariation.SMALL}
        >	 
            ← Tillbaka
        </DigiLink>
        </div>

      <h1>{article.title}</h1>
      <p><em>{article.teaser}</em></p>
      <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
    </article>
  );
}