import { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import { fetchOrders, Order } from '../../store/apis/baseApi';
import OrderHeaders from '../orderHeaders/OrderHeaders';
import { Sort } from '../orderHeaders/OrderHeaderTypes';
import OrderItem from '../orderItem/OrderItem';
import { orderTableCells } from '../orderHeaders/OrderHeaderUtils';
import { getFilteredOrders } from './OrderTableUtils';

function OrderTable() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);


    useEffect(() => {
        const fetch = async () => {
            const data= await fetchOrders();
            setOrders(data.data);
        }
        fetch();
    },[])

    const onHeaderClick = (sortFunc?: (a: Order, b: Order) => number) => (sort: Sort) => {
        if (sortFunc) orders?.sort(sortFunc);
        else orders?.sort();
        if (sort === Sort.Ascending) orders?.reverse();
        setOrders([...orders!]);
    }

    const onFilterChanged = (filter: string) => {
        if (!filter.length) {
            setFilteredOrders([]);
            setOrders([...orders!]);
        } else {
            setFilteredOrders(getFilteredOrders(orders, filter));
        }
    }

    const getOrders = () => {
        return filteredOrders.length && filteredOrders || orders;
    }

  return (
    <div className='pt-[19px] pl-[32px] pr-[19px] w-[1335px] mx-auto'>
        <div className='inline-block w-full'>
            <span className='text-4xl font-bold'>
                All orders
            </span>
            <Filter onFilterChange={onFilterChanged}/>
        </div>
        <div className='border-t border-[#C8C8C8] mt-[17px]'>
            <OrderHeaders cells={orderTableCells} onHeaderClick={onHeaderClick}/>
            {getOrders().map((order, i) => {
                return <OrderItem orderItem={order} key={order.id}/>
            })}
        </div>
    </div>
  );
}

export default OrderTable;
