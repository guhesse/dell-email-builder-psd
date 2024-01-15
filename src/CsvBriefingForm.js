import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function CsvBriefingForm({ closeModal }) {
    const { csvValues, setCsvValues } = useAppContext();
    const [editedValues, setEditedValues] = useState({});

    useEffect(() => {
        setEditedValues({ ...csvValues });
    }, [csvValues]);

    const handleInputChange = (key, value) => {
        setEditedValues((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
    };

    const handleConfirmEdit = () => {
        // console.log('Valores Editados Confirmados:', editedValues);
        setCsvValues(editedValues);
        closeModal();
    };


    return (
        <form>
            <div className="modal-container">
                <div className='modal'>
                    <h1 style={{ position: "relative", left: "-10px" }}>Briefing Info</h1>
                    <hr style={{ position: "relative", left: "-10px" }} />
                    <ul>
                        {Object.entries(editedValues)
                            .filter(([key, value]) => value !== undefined && value !== '')
                            .map(([key, value]) => (
                                <div key={key} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "4px" }}>
                                    <sp-detail className="sp-detail-dialog">
                                        <strong style={{ fontWeight: "bold" }}>{key}: <span style={{ fontWeight: "light" }}>{value}</span></strong>
                                    </sp-detail>
                                </div>
                            ))}
                    </ul>
                    <footer>
                        {/* ... (outros elementos do formulário, se necessário) */}
                    </footer>
                </div>
                <div className="modal-buttons">
                    <sp-button style={{ margin: "0px 5px" }} variant="warning" type="submit" onClick={closeModal}>
                        Cancel
                    </sp-button>
                    <sp-button
                        style={{ margin: "0px 5px" }}
                        variant="primary"
                        type="submit"
                        onClick={handleConfirmEdit}
                    >
                        Confirm & Edit
                    </sp-button>
                </div>
            </div >
        </form >
    );
}

