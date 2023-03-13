export const getStringWeekDays = (time: any) => {
    const weekdays = time.getUTCDay()

    switch (weekdays) {
        case 1: {
            return "Monday"
            
        }
        case 2: {
            return "Tuesday"
        }
        case 3: {
            return "Wednesday"
        }
        case 4: {
            return "Thursday"
        }
        case 5: {
            return "Friday"
        }
        case 6: {
            return "Saturday"
        }
        case 0: {
            return "Sunday"
        }
        default: {
            return "Tai"
        }
    }
}

export const getStringMonths = (time: any) => {

    switch (time) {
        case '01': {
            return "Jan"
            
        }
        case '02': {
            return "Feb"
        }
        case '03': {
            return "Mar"
        }
        case '04': {
            return "April"
        }
        case '05': {
            return "May"
        }
        case '06': {
            return "June"
        }
        case '07': {
            return "July"
        }
        case '08': {
            return "Aug"
        }
        case '09': {
            return "Sep"
        }
        case '10': {
            return "Oct"
        }
        case '11': {
            return "Nov"
        }
        case '12': {
            return "Dec"
        }
    }
}