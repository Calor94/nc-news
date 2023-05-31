import axios from "axios";

const api = axios.create({
  baseURL: "https://news-g29c.onrender.com/api",
});

export const getArticles = async () => {
  try {
    const { data } = await api.get("/articles");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = async (article_id) => {
  try {
    const { data } = await api.get(`/articles/${article_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (article_id) => {
  try {
    const { data } = await api.get(`/articles/${article_id}/comments`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
