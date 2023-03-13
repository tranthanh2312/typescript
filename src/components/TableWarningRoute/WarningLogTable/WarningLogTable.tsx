import React from "react";
import { Table } from "react-bootstrap";
import Demo2 from "../../../pages/Demo/Demo2";
import HTMLTooltip from "../../HTMLTooltip/HTMLTooltip";
import "./WarningLogTable.scss";

// interface WarningLogTable {
//     orderId: string
//     fullName: string
//     phone: string
//     itemName: string
//     price: number,
//     quantity?: any
// }

interface WarningLogTable {
    item: string;
    fullName: string;
    phone: string;
    progress: string;
    quantity: string;
}

type Props = {
    data: WarningLogTable[];
    getInforUser: (result: any) => any;
    handleOpenTable: (result: boolean) => void;
};

export default function WarningLogTable({
    data,
    getInforUser,
    handleOpenTable,
}: Props) {

    console.log(data)
    return (
        <Table className="tableWarningLog">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Progress</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {/* {data.map((item, index) => {
                    return (
                        <tr
                            style={{ cursor: "pointer" }}
                            key={index}
                            onClick={() => {
                                getInforUser(item);
                                handleOpenTable(true);
                            }}
                        >
                            <td>{index + 1}</td>
                            <td>{item.fullName}</td>
                            <td>{item.phone}</td>
                            <td>{item.progress}</td>
                            <td><p style={{ padding: "5px 10px", backgroundColor: "red" }}>Deleted</p></td>
                        </tr>
                    );
                })} */}
                <tr
                >
                    <td>asd</td>
                    <td>das</td>
                    <td>asd</td>
                    {/* <td><p className="m-0" style={{ padding: "5px 10px", backgroundColor: "red", display: 'inline-block', borderRadius: 10 }}>Deleted</p></td> */}
                    <td><HTMLTooltip JSX={<Demo2 />} JSXContent={<p style={{backgroundColor: '#f65b5b',display: 'inline-block', padding: '3px 10px', borderRadius: '5'}} className="m-0">Demo</p>} /></td>
                    <td>asdasd</td>
                </tr>
            </tbody>
        </Table>
    );
}

export function WarningInvoices({
    data,
    getInforUser,
    handleOpenTable,
}: Props) {
    return (
        <Table className="tableWarningLog">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Progress</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr
                            style={{ cursor: "pointer" }}
                            key={index}
                            onClick={() => {
                                getInforUser(item);
                                handleOpenTable(true);
                            }}
                        >
                            <td>{index + 1}</td>
                            <td>{item.fullName}</td>
                            <td>{item.phone}</td>
                            <td>{item.progress}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
