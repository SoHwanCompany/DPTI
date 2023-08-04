import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_URL;

const survey = async (history: string) => {
  const url = base_url + "";

  try {
    const response = await axios.post(url, { history }, {});
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error or handle it accordingly
  }
}

const result = async (history: string) => {
  const url = base_url + "/result";
  try {
    const response = await axios.post(url, { history }, {});
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error or handle it accordingly
  }
}

export { survey, result };