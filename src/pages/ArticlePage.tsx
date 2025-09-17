import { useNavigate, useParams } from "react-router";
import { articles } from "../data/articles";
import { DigiLinkInternal } from "@digi/arbetsformedlingen-react";
import { LinkVariation } from "@digi/arbetsformedlingen";
import "../styles/ArticlePage.scss";

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);
  if (!article) return <h1>Hittades inte</h1>;

  return (
    <article className="article-content">
        <div className="back-btn">
          <DigiLinkInternal
            onAfOnClick={() => {
              navigate(-1);
            }}
            afVariation={LinkVariation.LARGE}>
            Tillbaka
          </DigiLinkInternal>
        </div>

      <h1>{article.title}</h1>
      <p><em>{article.teaser}</em></p>
      <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
    </article>
  );
}