import React from 'react';
import Article from "./Article";


export default function ArticleList({articles}) {
    console.log(articles)
    const articleArray = articles.map(article => {
        return <Article 
            key = {article.id}
            date = {article.data}
            minutes = {article.minutes}
            title = {article.title}
            preview = {article.preview}
        />
    })
    return(
        <div>
            {articleArray}
        </div>
    )
}