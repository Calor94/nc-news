import axios from "axios";

const api = axios.create({
  baseURL: "https://news-g29c.onrender.com/api",
});

export const getArticles = async () => {
  const { data } = await api.get("/articles");
  return data;
};

export const getArticle = async (article_id) => {
  const { data } = await api.get(`/articles/${article_id}`);
  return data;
};

export const getComments = async (article_id) => {
  const { data } = await api.get(`/articles/${article_id}/comments`);
  return data;
};

export const getTopics = async () => {
  const { data } = await api.get("/topics");
  return data;
};

export const updateVote = async (article_id, num) => {
  const { data } = await api.patch(`/articles/${article_id}`, {
    inc_votes: num,
  });
  return data;
};

export const addComment = async (article_id, comment) => {
  const { data } = await api.post(`/articles/${article_id}/comments`, comment);
  return data;
};
