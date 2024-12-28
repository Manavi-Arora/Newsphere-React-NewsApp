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
  function isTodayOrYesterday(dateString) {
    const inputDate = new Date(dateString);  // Convert the string to a Date object
    
    // Get the current date in UTC (today)
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset time to midnight in local timezone
    const utcToday = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    
    // Calculate yesterday's date in UTC
    const utcYesterday = new Date(utcToday);
    utcYesterday.setDate(utcToday.getDate() - 1);
    
    // Normalize the input date to UTC midnight for comparison
    const utcInputDate = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate()));
    
    // Check if the input date is either today or yesterday
    if (utcInputDate >= utcYesterday && utcInputDate < new Date(utcToday.getTime() + 86400000)) {
        return true; // The date is today or yesterday
    }
    
    return false; // The date is neither today nor yesterday
}
  
  // Fetch data from News API when the component mounts
  const { country, category, setProgress } = props;
  useEffect(() => {
    // Define the API endpoint and API key
    let apiUrl =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=16`;

    // Fetch data from the API
    const fetchData = async () => {
      try {
        setState({loading:true})
        const response = await fetch(apiUrl);
        props.setProgress(40)
        const data = await response.json(); // Convert the response to JSON
        props.setProgress(70)
        setState({
          articles: data.articles, // Store the articles in the state
          loading: false, // Data is now loaded, set loading to false
          page: 1,
          totalResults: data.totalResults,
        });
        props.setProgress(100)
        if (props.category !== "general") {
          document.title = `Newsphere-${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
        }
        else{
          document.title = "Newsphere - A Sphere Of Daily News Analysis"
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({
          articles: [],
          loading: false, // Even if there's an error, set loading to false
        });
        
      }
    };

    fetchData(); // Call the function to fetch data
  }, [country, category, setProgress]); // Empty dependency array to run only once when the component mounts

  const nextClicked = async () => {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page + 1
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
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page - 1
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
      {!state.loading && <h2 className="text-center " style={{marginTop:"82px"}}>{`Top ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines...`}</h2>}
      <div className="row">
            {!state.loading && state.articles.map((article) => (
            <div className="col-md-3 my-4 d-flex align-items-center justify-content-center" key={article.url || article.title || article.id || Math.random()}>
              <NewsItem
                title={article.title ? article.title.slice(0, 45) : ""}
                description={
                  article.description ? article.description.slice(0, 70) : ""
                }
                imageUrl={
                  article.urlToImage ? article.urlToImage : defaultimage
                }
                newsUrl={article.url}
                author = {article.author?article.author:"Anonymous"}
                publishedAt = {new Date(article.publishedAt).toGMTString()}
                newBadge = {isTodayOrYesterday(article.publishedAt)}
                tag={article.source.name}
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
