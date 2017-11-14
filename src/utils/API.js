import axios from "axios";

const API = {
  // Query NYT API
  searchNYT: function(topic, startYear, endYear) {
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },
  // Retrieves saved articles from the db
  getArticle: function() {
    console.log("inside api js getArticle");
    return axios.get("/api/saved");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    console.log("inside api js saveArticle");
    return axios.post("/api/saved", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    console.log("inside api js deleteArticle");
    return axios.delete(`/api/saved/${id}`);
  }
};

export default API;