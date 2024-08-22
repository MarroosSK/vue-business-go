import axios from 'axios'

const API_KEY = import.meta.env.VITE_YELP_API_KEY
const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${API_KEY}`, accept: 'application/json' }
}

export const getReviews = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/${id}/reviews?limit=5&sort_by=newest`,
      options
    )
    const data = await response.data

    return data
  } catch (error) {
    console.error(error)
  }
}
