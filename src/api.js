import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

// Регистрация
export const registerUser = async (username, login, password) => {
    return await axios.post(`${BASE_URL}/reg`, { username, login, password });
};

// Авторизация
export const loginUser = async (login, password) => {
    return await axios.post(`${BASE_URL}/auth`, { login, password });
};

// Получение профиля пользователя
export const getProfile = async () => {
    return await axios.get(`${BASE_URL}/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

// Получение наблюдений
export const getObservations = async (filter) => {
    return await axios.get(`${BASE_URL}/observations`, { params: filter });
};

// Создание наблюдения
export const createObservation = async (observation) => {
    return await axios.post(`${BASE_URL}/observations`, observation, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

// Создание таксона
export const createTaxon = async (taxon) => {
    return await axios.post(`${BASE_URL}/taxons`, taxon, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};