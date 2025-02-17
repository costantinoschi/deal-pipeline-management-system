import React, { useState } from "react";

function DealForm({ addDeal }) {
    const [name, setName] = useState("");
    const [stage, setStage] = useState("sourcing");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDeal = { id: Date.now(), name, stage, notes: "" };
        addDeal(newDeal);
        setName("");
        setStage("sourcing");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Deal Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <select value={stage} onChange={(e) => setStage(e.target.value)}>
                <option value="sourcing">Sourcing</option>
                <option value="due_diligence">Due Diligence</option>
                <option value="closed">Closed</option>
            </select>
            <button type="submit">Add Deal</button>
        </form>
    );
}

export default DealForm;