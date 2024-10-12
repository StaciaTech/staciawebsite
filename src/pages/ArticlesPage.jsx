import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArticleNavBar from "../components/Resource/ArticleNavBar";
import "../styles/articles.css";
import ReUsableArticle from "../components/ReUsableComp/ReUsableArticle";
import axios from "axios";
import MobileFooter from "../components/MobileFooter";
import SideBar from "../components/SideBar";
import Star from "../components/Star";

function ArticlesPage() {
  const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(apiUrl);

  const [articleData, setArticleData] = useState();

  const FetchArticle = async () => {
    try {
      const res = await axios.get(`${apiUrl}/articles/list`);
      console.log(res.data.docs);
      setArticleData(res.data.docs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchArticle();
  }, []);

  return (
    <div>
      <NavBar /> <SideBar />
      {/* Articles Intro*/}
      <div className="article-section1">
        <div className="article-section-overlay">
          <div className="article-title1">
            <span>Articles</span>
            <Star />
          </div>
        </div>
      </div>
      {/* <div className="article-section2" style={{ marginBottom: 100 }}>
        <ArticleNavBar />
      </div> */}
      <div>
        <ReUsableArticle data={articleData} path={"/single-article"} />
      </div>
      <Footer /> <MobileFooter />
    </div>
  );
}

export default ArticlesPage;
