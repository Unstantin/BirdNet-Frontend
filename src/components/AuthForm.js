import React, { useState } from 'react';
import { registerUser, loginUser } from '../api';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await registerUser(username, login, password);
            alert('Регистрация успешна!');
        } catch (error) {
            alert('Ошибка регистрации');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await loginUser(login, password);
            localStorage.setItem('token', response.data.token);
            alert('Авторизация успешна!');
        } catch (error) {
            alert('Ошибка авторизации');
        }
    };

    return (
        <div>
            <h2>Регистрация/Авторизация</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default AuthForm;