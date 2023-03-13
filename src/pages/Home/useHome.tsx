import React from "react";

export interface WarningOrder {
    userId: number;
    fullName: string;
    itemName: string;
    price: number;
    reason: string;
}

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

export const GetWarningOrders = () => {
    const fetchData = async () => {
        const req: WarningOrder[] = await fetch(
            `http://localhost:8082/warning/orders?date=${formattedDate}`
        )
            .then((res) => {
                if (res.ok) return res.json();
            })
            .then((data) => {
                return data["data"];
            });
        return req;
    };

    return fetchData();
};

export const GetDuplicatedOrdersForHome = () => {
    const fetchData = async () => {
        const req: WarningOrder[] = await fetch(
            `http://localhost:8082/warning/duplicated_order?date=${formattedDate}`
        )
            .then((res) => {
                if (res.ok) return res.json();
            })
            .then((data) => {
                return data["data"];
            });
        return req;
    };

    return fetchData();
};
