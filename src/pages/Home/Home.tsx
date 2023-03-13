import React from "react";
import "./Home.scss";
import {
    faBell,
    faChartPie,
    faFileInvoice,
    faMagnifyingGlass,
    faRightToBracket,
    faSackDollar,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faApple,
    faFacebook,
    faDiscord,
    faShopify,
    faTiktok,
    faTwitter,
    faStripe,
    faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RoundChart from "../../components/Chart/RoundChart";
import {
    GetDuplicatedOrdersForHome,
    GetWarningOrders,
    WarningOrder,
    // IncompatibleOrder,
} from "./useHome";
import NoEvent from "../../components/NoEvent/NoEvent";
type Props = {};

export default function Home({}: Props) {
    const [showTable, setShowTable] = React.useState<boolean>(false);

    const [getWarningOrders, setWarningOrders] = React.useState<any>([]);

    React.useEffect(() => {
        GetWarningOrders().then((data) => {
            GetDuplicatedOrdersForHome().then((data1) => {
                data.push(...data1);
                const arr = Object.values(data);
                arr.sort((a, b) => a.userId - b.userId);
                setWarningOrders(arr);
            });
        });
    }, []);

    return (
        <div className="home">
            <h2 className="text-center">Warning Page</h2>

            {getWarningOrders.length >= 1 ? (
                <div className="wrongorders">
                    <h2>Total wrong orders today</h2>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setShowTable(!showTable);
                        }}
                    >
                        {showTable ? "Hide Table" : "Show Table"}
                    </button>
                    {showTable ? (
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>UserID</th>
                                    <th>Full Name</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Reason</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getWarningOrders.map(
                                    (item: WarningOrder, index: number) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.userId}</td>
                                                <td>{item.fullName}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.price}</td>
                                                <td>{item.reason}</td>
                                                <td>
                                                    <button className="btn btn-primary me-3">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </Table>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <NoEvent />
            )}
        </div>
    );
}
