import moment from 'moment';
import { Order } from '../../store/apis/baseApi';


const dateCompare = (a: Order, b: Order) => {
    const dateStr1 = a.date;
    const dateStr2 = b.date;
    const date1 = moment(dateStr1);
    const date2 = moment(dateStr2);

    if (date1.isBefore(date2)){
        return -1;
    } else if (date1.isAfter(date2)) {
        return 1;
    }

    return 0;
}

const statusCompare = (a:Order, b: Order) => {
    const status1 = a.status;
    const status2 = b.status;
    if (status1.length <status2.length){
        return -1;
    }
    else if (status1.length >status2.length){
        return 1;
    }

    return 0;
}

const numberRegExp = /[0-9]*$/i;
const dateRexExp = /[0-9]{2}.[0-9]{2}.[0-9]{4}$/i;
const sumRexExp = /[$€]?[0-9]$/i;
const statusRexExp = /^[a-zA-Z]*$/i;

export const orderTableCells = [
    { title: 'Order ID', property: 'id', regex: numberRegExp },
    { title: 'Order date', property: 'date', regex: dateRexExp, sort: dateCompare},
    { title: 'Order total', property: 'total', regex: sumRexExp},
    { title: 'Quantity', property: 'quantity', regex: numberRegExp},
    { title: 'Status', property: 'status', sort: statusCompare, regex: statusRexExp}
];