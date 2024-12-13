import React, { useEffect, useState } from 'react';
import { getObservations } from '../api';

const ObservationList = () => {
    const [observations, setObservations] = useState([]);

    useEffect(() => {
        const fetchObservations = async () => {
            try {
                const response = await getObservations();
                setObservations(response.data);
            } catch (error) {
                alert('Ошибка при загрузке наблюдений');
            }
        };
        fetchObservations();
    }, []);

    return (
        <div>
            <h2>Наблюдения</h2>
            <ul>
                {observations.map((obs) => (
                    <li key={obs.id}>
                        {obs.description} ({obs.date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ObservationList;