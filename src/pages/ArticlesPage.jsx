import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArticleNavBar from "../components/Resource/ArticleNavBar";
import "../styles/articles.css";

function ArticlesPage() {
  return (
    <div>
      <NavBar />
      {/* Articles Intro*/}
      <div className="article-section1">
        <div className="article-section-overlay">
          <div className="article-title1">Lorem, ipsum dolor</div>
          <div className="article-text">Lorem, ipsum.</div>
          <div className="article-text">lorem</div>
        </div>
      </div>

      <div className="article-section2" style={{ marginBottom: 100 }}>
        <ArticleNavBar />
      </div>
      <Footer />
    </div>
  );
}

export default ArticlesPage;
