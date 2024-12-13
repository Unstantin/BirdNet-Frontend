import React, { useState } from 'react';
import { createObservation } from '../api';

const ObservationForm = () => {
    const [taxonId, setTaxonId] = useState('');
    const [count, setCount] = useState('');
    const [geoX, setGeoX] = useState('');
    const [geoY, setGeoY] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        try {
            const observation = {
                taxon_id: taxonId,
                count: count,
                geo: { x: geoX, y: geoY },
                description: description
            };
            await createObservation(observation);
            alert('Наблюдение создано!');
        } catch (error) {
            alert('Ошибка при создании наблюдения');
        }
    };

    return (
        <div>
            <h2>Создать наблюдение</h2>
            <input
                type="text"
                placeholder="ID таксона"
                value={taxonId}
                onChange={(e) => setTaxonId(e.target.value)}
            />
            <input
                type="number"
                placeholder="Количество"
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
            <input
                type="number"
                placeholder="Координата X"
                value={geoX}
                onChange={(e) => setGeoX(e.target.value)}
            />
            <input
                type="number"
                placeholder="Координата Y"
                value={geoY}
                onChange={(e) => setGeoY(e.target.value)}
            />
            <input
                type="text"
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSubmit}>Создать</button>
        </div>
    );
};

export default ObservationForm;