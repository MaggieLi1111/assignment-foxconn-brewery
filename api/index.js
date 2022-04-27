import React from "react";

const fetchShow = () => {
    return axios
      .get("https://www.openbrewerydb.org/documentation/01-listbreweries")
      .then(res => {
        const { data } = res;
        
        return {
          name: data.name,
          image: data.image,
          summary: stripTags(data.summary),
          seasons: formatSeasons(data._embedded.episodes)
        };
      });
  };

  export default fetchShow;