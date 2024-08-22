import axios from 'axios'

const API_KEY = import.meta.env.VITE_YELP_API_KEY

export const getBusiness = async (id: string) => {
  try {
    const response = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${API_KEY}`, accept: 'application/json' }
    })
    const data = await response.data
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
