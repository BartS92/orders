import { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import { fetchOrders, Order } from '../../store/apis/baseApi';
import TableHeaders from '../tableHeaders/TableHeaders';

import OrderItem from '../orderItem/OrderItem';
import { Sort } from '../tableHeaders/TablerderHeaderTypes';
import { getFilteredOrders } from './TableUtils';
import { orderTableCells } from '../tableHeaders/TableHeaderUtils';
import NewOrder from '../newOrder/NewOrder';



function Table() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<Order[]|null>(null);
    const  [newOrderForm, setNewOrderFrom] = useState<boolean>(false);


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
        if (sort === Sort.Descending) orders?.reverse();
        setOrders([...orders!]);
    }

    const onFilterChanged = (filter: string) => {
        if (!filter.length) {
            setFilteredOrders(null);
            setOrders([...orders!]);
        } else {
            const resOrders= getFilteredOrders(orders, filter);
            setFilteredOrders(resOrders);
        }
    }

    const getOrders = () => {
        return filteredOrders || orders;
    }

  return (
    <div className='pt-[19px] pl-[32px] pr-[19px] w-[1335px] mx-auto'>
        <div className='inline-block w-full flex flex-nowrap'>
            <span className='text-4xl font-bold grow'>
                All orders
            </span>
            <Filter onFilterChange={onFilterChanged}/>
            <i className='fa fa-plus ml-[40px] pr-[30px] leading-10 hover:cursor-pointer' aria-hidden='true' onClick={()=> setNewOrderFrom(true)}/>
            {newOrderForm && <NewOrder onClose={() => setNewOrderFrom(false)} onAddOrder={(order: Order) => {setOrders([...orders!, order]); }}/>}
        </div>
        <div className='border-t border-[#C8C8C8] mt-[17px]'>
            <TableHeaders cells={orderTableCells} onHeaderClick={onHeaderClick}/>
            {getOrders().map((order, i) => {
                return <OrderItem orderItem={order} key={order.id}/>
            })}
        </div>
    </div>
  );
}

export default Table;
