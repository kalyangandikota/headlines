import axios from 'axios'

const api_key='XXXXXXXXXXXX'  // please paste your apikey here

export const getHeadlines =  (search) => {
  return axios({
    url: `https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}&pageSize=100`,
    method: 'get'
  })
}