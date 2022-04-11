import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '359fe9a612msh973095ea8a483d1p1efa3bjsn205c63b58134'
          }        
      })

      return data;
  }