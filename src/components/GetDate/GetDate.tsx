import React from 'react'
import { getStringMonths, getStringWeekDays } from '../../until/until';

type Props = {}

export default function GetDate({ }: Props) {
    const [time, setTime] = React.useState(new Date());
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const stringMonth = getStringMonths(month)
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`
    const formattedVietNameseDate = `${stringMonth} ${day}, ${year}`


    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const weekdays = getStringWeekDays(time)
    return (
        <>
            <h1 style={{paddingTop: 50, paddingLeft: 90, fontSize: 20}}>{weekdays}, {formattedVietNameseDate} {hours}:{minutes < 10 ? '0' + minutes : minutes}</h1>
        </>
    )
}