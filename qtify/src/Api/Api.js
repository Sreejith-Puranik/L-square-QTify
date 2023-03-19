import axios from "axios";

const Backend_url = "https://qtify-backend-labs.crio.do";

export const fetchtopsongs = async () => {
  try {
    const response = await axios.get(`${Backend_url}/albums/top`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const newalbums = async () => {
  try {
    const response = await axios.get(`${Backend_url}/albums/new`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const songs = async () => {
  try {
    const response = await axios.get(`${Backend_url}/songs`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const genre = async () => {
  try {
    const response = await axios.get(`${Backend_url}/genres`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
