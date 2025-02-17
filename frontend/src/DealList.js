import React from "react";

function DealList({ deals }) {
    return (
        <div>
            <h2>Deals</h2>
            <ul>
                {deals.map((deal) => (
                    <li key={deal.id}>
                        {deal.name} - {deal.stage}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DealList;