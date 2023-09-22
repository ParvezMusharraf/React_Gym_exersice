
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': "2a20130f27msh2362dffbe26185ap14a686jsn2a6ec0a5c454",
        // 'X-RapidAPI-Key': import.meta.env_VITE_APP_RAPID_API_KEY, //For Vite Env
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,  // For React Env
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    headers: {
      'X-RapidAPI-Key': '2a20130f27msh2362dffbe26185ap14a686jsn2a6ec0a5c454',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };