import api from "./apiConfig";

export const getLogs = async () => {
  try {
    const response = await api.get("/logs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLog = async (id) => {
  try {
    const response = await api.get(`/logs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createLog = async (log) => {
  try {
    const response = await api.post("/logs", log);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLog = async (id, log) => {
  try {
    const response = await api.put(`/logs/${id}`, log);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLog = async (id) => {
  try {
    const response = await api.delete(`/logs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

