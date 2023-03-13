import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars-2";
import { DuplicatedInvoices } from "../../pages/WarningLog/useWarningLog";

type Props = {
    data: DuplicatedInvoices[];
    openModal: boolean;
    handleCloseTable: (result: boolean) => void;
};

export default function ModalInvoice({
    data,
    openModal,
    handleCloseTable,
}: Props) {
    console.log(data);
    return (
        <>
            <Modal
                show={openModal}
                onHide={() => {
                    handleCloseTable(false);
                }}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {`${data[0]?.fullName} - ${data[0]?.className}`}
                    </Modal.Title>
                </Modal.Header>
                <Scrollbars style={{ width: "100%", height: "450px" }}>
                    <Modal.Body>
                        <Table className="tableWarningLog">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Note</th>
                                    <th>Price</th>
                                    <th>Reason</th>
                                    <th>Transaction</th>
                                    <th>Clerk Name</th>
                                    <th>Date Created</th>
                                    <th>Date Deleted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => {
                                    {
                                        console.log(item);
                                    }
                                    return (
                                        <tr
                                            style={{ cursor: "pointer" }}
                                            key={index}
                                            onClick={() => {}}
                                        >
                                            <td>{index + 1}</td>
                                            <td>{item.note}</td>
                                            <td>{item.payment}</td>
                                            <td>{item.reasonDeleted}</td>
                                            <td>{item.transactionId}</td>
                                            <td>{item.clerkFullName}</td>
                                            <td>{item.dateCreated}</td>
                                            <td>{item.dateDeleted}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Scrollbars>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleCloseTable(false);
                        }}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
