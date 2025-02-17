import React, { useState, useEffect } from "react";
import DealList from "./DealList";
import DealForm from "./DealForm";

function App() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch("/api/deals")
            .then((response) => response.json())
            .then((data) => setDeals(data));
    }, []);

    const addDeal = (newDeal) => {
        fetch("/api/deals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDeal),
        })
            .then((response) => response.json())
            .then((data) => setDeals([...deals, data]));
    };

    return (
        <div>
            <h1>Deal Pipeline Management</h1>
            <DealForm addDeal={addDeal} />
            <DealList deals={deals} />
        </div>
    );
}

export default App;