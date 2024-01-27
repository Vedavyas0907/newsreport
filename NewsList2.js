// src/components/NewsList.js
import React, { useEffect, useState } from 'react';
import { getNews1 } from './getNews1';

const NewsList2 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews1();
      setNews(newsData);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.title}>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <getNews1/>
            <p>{article.description}</p>
            {/* Add more details or customize as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList2;