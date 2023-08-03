import axios from "axios";

const base_url = "http://localhost:8080/api/v1/dpti";

const firstSurvey = async (id: number, no: number) => {
  const url = base_url + `?id=${id}&no=${no}`;
  console.log(url)
  try {
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error or handle it accordingly
  }

}

const survey = async (id: number, no: number, question : string, answer : string) => {
  const url = base_url + `?id=${id}&no=${no}`;
  
  const data = {
    question: question,
    answer: answer
  };

  try {
    const response = await axios.post(url, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error or handle it accordingly
  }
}

const result = async(id: number, question : string, answer : string) => {
  const url = base_url + `/result?id=${id}`;
  
  try {
    const response = await axios.post(url, {
      question: question,
      answer : answer
    });
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error or handle it accordingly
  }
}

export { firstSurvey, survey, result };