import axios from "axios";

const api = axios.create({
  baseURL: "https://news-g29c.onrender.com/api",
});

export const getArticles = async () => {
  try {
    const { data } = await api.get("/articles");
    return data;
  } catch (error) {}
};

export const getArticle = async (article_id) => {
  try {
    const { data } = await api.get(`/articles/${article_id}`);
    return data;
  } catch (error) {}
};

export const getComments = async (article_id) => {
  try {
    const { data } = await api.get(`/articles/${article_id}/comments`);
    return data;
  } catch (error) {}
};

export const updateVote = async (article_id, num) => {
  const { data } = await api.patch(`/articles/${article_id}`, {
    inc_votes: num,
  });
  return data;
};
