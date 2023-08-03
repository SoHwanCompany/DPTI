import axios from "axios";

const base_url = "https://naver.com/api/v1/dpti";

const firstSurvey = (id: number, no: number) => {
  const url = base_url + `?id=${id}&no=${no}`;
  axios.post(url).then((response) => {
    console.log(response)
    return response;
  })
}

const survey = (id: number, no: number, question : string, answer : string) => {
  const url = base_url + `?id=${id}&no=${no}`;
  
  axios.post(url, {
    question: question,
    answer : answer
  }).then((response) => {
    console.log(response)
    return response;
  })
}

const result = (id: number, question : string, answer : string) => {
  const url = base_url + `/result?id=${id}`;
  
  axios.post(url, {
    question: question,
    answer : answer
  }).then((response) => {
    console.log(response)
    return response;
  })
}