import React from 'react'
import "../../styles/Home/Articles.css"
import Marquee from 'react-fast-marquee'



function SingleArticleCard(){
    return(
        <div className="article-outline-holder">
        <div className="single-article-card-image">
            <div className="article-text-container">
            <div className="article-author-name">
                Author Name
            </div>
            <div className="card-article-title">Machine Designs Evolution</div>
            <div className="card-article-body">
            This is the classic dummy text, a scrambled passage of Latin that provides a natural look for text layouts without any meaning. 
            </div>
            <div className="article-learn-more-link">Learn More &gt; </div>
            </div>
        </div>
        </div>
    )
}
function Articles() {
  return (
   <>
        <div className="articles-title">
            Articles
        </div>
        <div className="article-slider">
        <Marquee 
      
        style={{display:"flex", alignItems:"flex-end",height:"100%",position:"relative"}} pauseOnHover={true}>
        <SingleArticleCard/>
        <SingleArticleCard/>
        <SingleArticleCard/>
        <SingleArticleCard/>
        <SingleArticleCard/>
        </Marquee>
        </div>
    </>
  )
}

export default Articles;