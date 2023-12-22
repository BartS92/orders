import { Order } from '../../store/apis/baseApi';
import { orderTableCells } from '../tableHeaders/TableHeaderUtils';
import { Currencies } from '../orderItem/OrderItemUtils';


export const getFilteredOrders= (orders: Order[], filter: string) => {
    const filterColumns = orderTableCells.filter(cell => cell.regex.test(filter));
    return orders.filter(o => {
        const map = new Map(Object.entries(o));

        map.set('total', `${Currencies[map.get('currency')!]}${map.get('total')}`);
        map.delete('currency');
        for (let prop in o) {
            const col= filterColumns.find(c => c.property === prop);
            if (col && map.get(prop)!.toString().toLowerCase().includes(filter.toLowerCase())) {
                return true;
            }
        }

        return false;
    });
}