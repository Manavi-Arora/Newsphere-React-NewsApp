import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./News.css"
import Spinner from "./Spinner";

export default function News(props) {
  const [state, setState] = useState({
    articles: [], // To store the fetched articles
    loading: true, // To track loading state
    totalResults: 0,
  });

  // Fetch data from News API when the component mounts
  useEffect(() => {
    // Define the API endpoint and API key
    let apiUrl =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3dc6ffe0c2344550bc5ee72fd1757dd7&page=1&pageSize=16`;

    // Fetch data from the API
    const fetchData = async () => {
      try {
        setState({loading:true})
        const response = await fetch(apiUrl);
        const data = await response.json(); // Convert the response to JSON
        setState({
          articles: data.articles, // Store the articles in the state
          loading: false, // Data is now loaded, set loading to false
          page: 1,
          totalResults: data.totalResults,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({
          articles: [],
          loading: false, // Even if there's an error, set loading to false
        });
      }
    };

    fetchData(); // Call the function to fetch data
  }, [props.country,props.category]); // Empty dependency array to run only once when the component mounts

  const nextClicked = async () => {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3dc6ffe0c2344550bc5ee72fd1757dd7&page=${state.page + 1
        }&pageSize=16`;
      try {
        setState({loading:true})
        const response = await fetch(apiUrl);
        const data = await response.json(); // Convert the response to JSON
        setState({
          articles: data.articles, // Store the articles in the state
          loading: false, // Data is now loaded, set loading to false
          page: state.page + 1,
          totalResults: data.totalResults,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({
          articles: [],
          loading: false, // Even if there's an error, set loading to false
          page: null,
        });
      }
  };

  const prevClicked = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3dc6ffe0c2344550bc5ee72fd1757dd7&page=${state.page - 1
      }&pageSize=16`;
    try {
      setState({loading:true})
      const response = await fetch(apiUrl);
      const data = await response.json(); // Convert the response to JSON
      setState({
        articles: data.articles, // Store the articles in the state
        loading: false, // Data is now loaded, set loading to false
        page: state.page - 1,
        totalResults: data.totalResults,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setState({
        articles: [],
        loading: false, // Even if there's an error, set loading to false
        page: null,
      });
    }
  };

  const defaultimage =
    "https://i.insider.com/67604557cf8d1359a2e02724?width=1200&format=jpeg";
  return (
    <div className="container my-2">
      {state.loading && <Spinner/>}
      {!state.loading && <h2 className="text-center">Major News Headlines...</h2>}
      <div className="row">
            {!state.loading && state.articles.map((article) => (
            <div className="col-md-3 my-4 d-flex align-items-center justify-content-center" key={article.id}>
              <NewsItem
                title={article.title ? article.title.slice(0, 50) : ""}
                description={
                  article.description ? article.description.slice(0, 80) : ""
                }
                imageUrl={
                  article.urlToImage ? article.urlToImage : defaultimage
                }
                newsUrl={article.url}
              />
            </div>
          ))
        }
      </div>
      {!state.loading && <div className="container d-flex justify-content-between">
        <button
          disabled={state.page <= 1}
          type="button"
          className={`btn hoverColor ${state.page <= 1?'btn-secondary' : 'btn-primary'}`}
          onClick={prevClicked}
        >
          &larr; Previous
        </button>
        <button type="button" className={`btn hoverColor ${state.page + 1 > Math.ceil(state.totalResults / 16) ? 'btn-secondary' : 'btn-primary'}`} disabled={state.page + 1 > Math.ceil(state.totalResults / 16)} onClick={nextClicked}>
          Next &rarr;
        </button>
      </div>}
    </div>
  );
}
