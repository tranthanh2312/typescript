import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars-2";

type Props = {
    data: any[];
    openModal: boolean;
    handleCloseTable: (result: boolean) => void;
};

export default function ModalDetail({
    data,
    openModal,
    handleCloseTable,
}: Props) {
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
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Reason</th>
                                    <th>Date Created</th>
                                    <th>Date Deleted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr
                                            style={{ cursor: "pointer" }}
                                            key={index}
                                            onClick={() => {}}
                                        >
                                            <td>{index + 1}</td>
                                            <td>{item.itemName}</td>
                                            <td>{item.price}</td>
                                            <td>{item.reason}</td>
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
