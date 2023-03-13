export interface DuplicatedOrder {
    orderId: string;
    fullName: string;
    phone: string;
    className: string;
    itemName: string;
    price: number;
    reason: string;
    process: string;
    dateCreated: string;
    createdUserFullName: string;
    dateDeleted: string;
}

export interface DuplicatedInvoices {
    id: string;
    orderID: string;
    fullName: string;
    phone: string;
    className: string;
    note: string;
    payment: number;
    clerkFullName: string;
    reasonDeleted: string;
    transactionId: string;
    process: string;
    dateCreated: string;
    dateDeleted: string;
}

export const GetDuplicatedOrders = () => {
    const fetchData = async () => {
        const req: DuplicatedOrder[] = await fetch(
            `http://localhost:8080/api/v1/tuition/warning/deleted_duplicated_order?date=2023-03-03`,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }
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

export const GetDuplicatedInvoices = () => {
    const fetchData = async () => {
        const req: DuplicatedInvoices[] = await fetch(
            `http://localhost:8080/api/v1/tuition/warning/deleted_duplicated_invoice?date=2023-03-03`,
            {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            }
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
