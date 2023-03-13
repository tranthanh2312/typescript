import React, { useState } from "react";
import "./WarningLog.scss";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import WarningLogTable, {
    WarningInvoices,
} from "../../components/TableWarningRoute/WarningLogTable/WarningLogTable";
import { Collapse } from "antd";
import BarChart from "../../components/Chart/BarChart";
import ModalDetail from "../../components/ModalDetail/ModalDetail";
import {
    DuplicatedInvoices,
    DuplicatedOrder,
    GetDuplicatedInvoices,
    GetDuplicatedOrders,
} from "./useWarningLog";
import ModalInvoice from "../../components/ModalDetail/ModalInvoice";
import { Table } from "react-bootstrap";
import NoEvent from "../../components/NoEvent/NoEvent";
import { FcDeleteDatabase } from "react-icons/fc";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";




const { Panel } = Collapse;

type Props = {};
interface WarningLogTableData {
    item: string;
    fullName: string;
    phone: string;
}



export default function WarningLog({ }: Props) {
    const [showWarningLogTable, setShowWarningLogTable] = React.useState(true);
    const [dataOnModal, setDataOnModal] = React.useState<any>([]);
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [openModalInvoice, setOpenModalInvoice] =
        React.useState<boolean>(false);

    const [getDuplicatedOrders, setDuplicatedOrder] = React.useState<any>([]);
    const [getDuplicatedInvoices, setDuplicatedInvoices] = React.useState<any>(
        []
    );

    React.useEffect(() => {
        GetDuplicatedOrders().then((res) => setDuplicatedOrder(res));
        GetDuplicatedInvoices().then((res) => setDuplicatedInvoices(res));
    }, []);

    let res: any = {};
    for (let i = 0; i < getDuplicatedOrders.length; i++) {
        if (
            res[
            getDuplicatedOrders[i].fullName +
            "-" +
            getDuplicatedOrders[i].phone
            ] === undefined
        ) {
            res[
                getDuplicatedOrders[i].fullName +
                "-" +
                getDuplicatedOrders[i].phone
            ] = 1;
        } else {
            res[
                getDuplicatedOrders[i].fullName +
                "-" +
                getDuplicatedOrders[i].phone
            ] += 1;
        }
    }

    let res2: any = {};
    for (let i = 0; i < getDuplicatedInvoices.length; i++) {
        if (
            res2[
            getDuplicatedInvoices[i].fullName +
            "-" +
            getDuplicatedInvoices[i].phone
            ] === undefined
        ) {
            res2[
                getDuplicatedInvoices[i].fullName +
                "-" +
                getDuplicatedInvoices[i].phone
            ] = 1;
        } else {
            res2[
                getDuplicatedInvoices[i].fullName +
                "-" +
                getDuplicatedInvoices[i].phone
            ] += 1;
        }
    }

    const item = getDuplicatedOrders.map((item: DuplicatedOrder) => {
        return {
            item: `${item.fullName}-${item.phone}`,
            fullName: item.fullName,
            phone: item.phone,
            className: item.className,
            itemName: item.itemName,
            price: item.price,
            quantity: res[`${item.fullName}-${item.phone}`],
            reason: item.reason,
            process: item.process,
            dateCreated: item.dateCreated,
            dateDeleted: item.dateCreated,
        };
    });
    let uniqueArr = item.filter(
        (obj: any, index: number, self: any) =>
            index === self.findIndex((t: any) => t.item === obj.item)
    );

    const invoice = getDuplicatedInvoices.map((item: DuplicatedInvoices) => {
        return {
            item: `${item.fullName}-${item.phone}`,
            fullName: item.fullName,
            phone: item.phone,
            className: item.className,
            note: item.note,
            payment: item.payment,
            quantity: res2[`${item.fullName}-${item.phone}`],
            clerkFullName: item.clerkFullName,
            reasonDeleted: item.reasonDeleted,
            transactionId: item.transactionId,
            process: item.process,
            dateCreated: item.dateCreated,
            dateDeleted: item.dateDeleted,
        };
    });
    let deletedInvoice = invoice.filter(
        (obj: any, index: number, self: any) =>
            index === self.findIndex((t: any) => t.item === obj.item)
    );

    const getInforUser = (result: WarningLogTableData) => {
        const newArr = item.filter((item: any) => {
            return item.item === result.item;
        });
        setDataOnModal(newArr);
    };

    const getInforUserInvoice = (result: WarningLogTableData) => {
        const newArr = invoice.filter((item: any) => {
            return item.item === result.item;
        });
        setDataOnModal(newArr);
    };

    const handleOpenTable = (result: boolean) => {
        setOpenModal(result);
    };

    const handleOpenTableInvoice = (result: boolean) => {
        setOpenModalInvoice(result);
    };

    const handleCloseTable = (result: boolean) => {
        setOpenModal(result);
        setOpenModalInvoice(result);
    };

    const statisticData = {
        invoices: getDuplicatedInvoices.length,
        orders: getDuplicatedOrders.length,
        attendances: 1,
    };

    const showContent = uniqueArr.length + deletedInvoice.length;
    console.log(showContent)

    return (
        <>
            {/* {showContent ? */}

            <div className="warninglog">
                <div className="statisticalWarning mb-5">
                    <div className="row">
                        <div className="col-4">
                            <h4>Total Deleted By Cronbot (Chart)</h4>
                            <BarChart dataPie={statisticData} />
                        </div>
                        <div className="col-8">
                            {/* <h4 className="">
                                Detail Statistical Warning
                            </h4> */}
                            <div className="row">
                                <div className="col-4">
                                    <div className="item">
                                        <i><FcDeleteDatabase /></i>
                                        <div className="itemdetail">
                                            <p>Deleted Orders</p>
                                            <span>20 Orders</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item">
                                        <i><FaFileInvoiceDollar /></i>
                                        <div className="itemdetail">
                                            <p>Deleted Invoices</p>
                                            <span>20 Orders</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item">
                                        <i><BsFillPeopleFill /></i>
                                        <div className="itemdetail">
                                            <p>Deleted Attendances</p>
                                            <span>20 Orders</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="warningtable">
                                <h4>Total Deleted By Cronbot (Table)</h4>
                                <Table className="table" >
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Name</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Invoice</td>
                                            <td>20</td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>Ordes</td>
                                            <td>20</td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>Attendace</td>
                                            <td>50</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex table">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setShowWarningLogTable(!showWarningLogTable);
                        }}
                    >
                        {showWarningLogTable ? (
                            <AiFillCaretDown />
                        ) : (
                            <AiFillCaretRight />
                        )}
                    </button>
                    <h4>Tables</h4>
                </div>

                {showWarningLogTable ? (
                    <Collapse accordion>
                        <Panel header="Deleted Orders" key="1">
                            <h3>Deleted Orders By Cronbot</h3>
                            <WarningLogTable
                                data={uniqueArr}
                                getInforUser={getInforUser}
                                handleOpenTable={handleOpenTable}
                            />
                        </Panel>
                        <Panel header="Warning Invoice" key="2">
                            <h3>Deleted Invoice By Cronbot</h3>
                            <WarningInvoices
                                data={deletedInvoice}
                                getInforUser={getInforUserInvoice}
                                handleOpenTable={handleOpenTableInvoice}
                            />
                        </Panel>
                        <Panel header="Warning Attendance" key="3">
                            <h4>Deleted Attendance By Cronbot</h4>
                            <WarningLogTable
                                data={uniqueArr}
                                getInforUser={getInforUser}
                                handleOpenTable={handleOpenTable}
                            />
                        </Panel>
                    </Collapse>
                ) : (
                    <></>
                )}
            </div>

            {/* // : <>
                //     <NoEvent />
                // </>} */}

            <ModalDetail
                data={dataOnModal}
                handleCloseTable={handleCloseTable}
                openModal={openModal}
            />
            <ModalInvoice
                data={dataOnModal}
                handleCloseTable={handleCloseTable}
                openModal={openModalInvoice}
            />
        </>
    );
}
