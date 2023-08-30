function weekDayStringF(weekDay){
    let weekDayString = '';
    switch (weekDay) {
        case 1:
            weekDayString = "Monday";
            break;
        case 2:
            weekDayString = "Tuesday";
            break;
        case 3:
            weekDayString = "Wednesday";
            break;
        case 4:
            weekDayString = "Thursday";
            break;
        case 5:
            weekDayString = "Friday";
            break;
        case 6:
            weekDayString = "Saturday";
            break;
        case 7:
            weekDayString = "Sunday";
            break;
        default:
            weekDayString = "Invalid day";
        }
    return weekDayString;
}

function monthStringF(monthNumber){
    let monthName = '';
    switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month number";
    }
    return monthName;
}

const clock  = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById('div-clock').innerHTML = (`${hour}:${minutes}:${seconds}`);

    let weekDayString = weekDayStringF( date.getDay());
    let day = date.getDate();
    let monthString = monthStringF(date.getMonth()+1);
    document.getElementById('div-date').innerHTML = (`${weekDayString} ${day} ${monthString}`);

    document.getElementById('container').classList.toggle('animate');

}

clock();
setInterval(clock,1000);

