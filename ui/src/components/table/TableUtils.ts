import { Order } from '../../store/apis/baseApi';
import { orderTableCells } from '../tableHeaders/TableHeaderUtils';
import { getFormatDate, getTotalString } from '../orderItem/OrderItemUtils';


const updateDate = (map: Map<string, string>) => {
    map.set('date', getFormatDate(map.get('date')!));
}

const updateTotal = (map: Map<string, string>) => {
    map.set('total', getTotalString(map.get('total')!, map.get('currency')!));
}

export const getFilteredOrders= (orders: Order[], filter: string) => {
    const filterColumns = orderTableCells.filter(cell => cell.regex.test(filter));
    return orders.filter(o => {
        const map = new Map(Object.entries(o));

        updateTotal(map);
        updateDate(map);


        for (let prop in o) {
            const col= filterColumns.find(c => c.property === prop);
            if (col && map.get(prop)!.toString().toLowerCase().includes(filter.toLowerCase())) {
                return true;
            }
        }

        return false;
    });
}