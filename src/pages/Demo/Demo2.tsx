import React from 'react'
import { Table } from 'react-bootstrap'

type Props = {}

export default function Demo2({}: Props) {
  return (
    <>
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
                    <td><p className="m-0" style={{ padding: "5px 10px", backgroundColor: "red", display: 'inline-block', borderRadius: 10 }}>Deleted</p></td>
                    <td>asdasd</td>
                </tr>
            </tbody>
        </Table>
    </>
  )
}