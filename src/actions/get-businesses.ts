import axios from 'axios'

const API_KEY = import.meta.env.VITE_YELP_API_KEY

export const getBusinesses = async ({
  term = '',
  location = ''
}: {
  term?: string
  location?: string
} = {}) => {
  try {
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=20`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${API_KEY}`, accept: 'application/json' }
      }
    )
    const data = await response.data.businesses

    return data
  } catch (error) {
    console.error(error)
  }
}
