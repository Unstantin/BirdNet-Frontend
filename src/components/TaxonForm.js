import React, { useState } from 'react';
import { createTaxon } from '../api';

const TaxonForm = () => {
    const [name, setName] = useState('');
    const [scienceName, setScienceName] = useState('');

    const handleSubmit = async () => {
        try {
            const taxon = { name, science_name: scienceName };
            await createTaxon(taxon);
            alert('Таксон создан!');
        } catch (error) {
            alert('Ошибка при создании таксона');
        }
    };

    return (
        <div>
            <h2>Создать таксон</h2>
            <input
                type="text"
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Научное название"
                value={scienceName}
                onChange={(e) => setScienceName(e.target.value)}
            />
            <button onClick={handleSubmit}>Создать</button>
        </div>
    );
};

export default TaxonForm;