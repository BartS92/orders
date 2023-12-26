import { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import { fetchOrders, Order } from '../../store/apis/baseApi';
import TableHeaders from '../tableHeaders/TableHeaders';

import OrderItem from '../orderItem/OrderItem';
import { Sort } from '../tableHeaders/TablerderHeaderTypes';
import { getFilteredOrders } from './TableUtils';
import { orderTableCells } from '../tableHeaders/TableHeaderUtils';
import NewOrder from '../newOrder/NewOrder';
import Pagination from '../pagination/Pagination';
import { getPagesCount, PAGINATION_PAGE_SIZE } from '../pagination/PaginationUtils';



function Table() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<Order[]|null>(null);
    const  [newOrderForm, setNewOrderFrom] = useState<boolean>(false);
    const  [currentPage, setPage] = useState<number>(1);


    useEffect(() => {
        const fetch = async () => {
            const data= await fetchOrders();
            setOrders(data.data);
        }
        fetch();
    },[])

    const onHeaderClick = (sortFunc?: (a: Order, b: Order) => number) => (sort: Sort) => {
        const orders= getOrders();
        if (sortFunc) orders.sort(sortFunc);
        else getOrders().sort();
        if (sort === Sort.Descending) orders.reverse();

        updateOrdersFunc()([...orders!]);
    }

    const updateOrdersFunc = () => {
        if (filteredOrders) {
            return setFilteredOrders;
        } else {
            return setOrders;
        }
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

    const getPaginatedOrders = () => {
        const resOrders = getOrders();
        if (isFirstPage){
            return resOrders.slice(0, PAGINATION_PAGE_SIZE);
        }
        else if (isLastPage) {
            return resOrders.slice(- (resOrders.length - (currentPage - 1) * PAGINATION_PAGE_SIZE));
        }
        else return resOrders.slice(PAGINATION_PAGE_SIZE * (currentPage - 1), currentPage * PAGINATION_PAGE_SIZE );
    }

    const getOrders = () => {
        return filteredOrders || orders;
    }

    const onPageChanged = (page: number) => {
        setPage(page);
    }


    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === getPagesCount(getOrders().length);


  return (
    <div className='pt-[19px] pl-[32px] pr-[19px] w-[1335px] mx-auto'>
        <div className='inline-block w-full flex flex-nowrap'>
            <span className='text-4xl font-bold grow'>
                All orders
            </span>
            <Filter onFilterChange={onFilterChanged}/>
            <i className='fa fa-plus ml-[40px] pr-[30px] leading-10 hover:cursor-pointer' aria-hidden='true' onClick={()=> setNewOrderFrom(true)}/>
            {newOrderForm && <NewOrder close={() => setNewOrderFrom(false)} addOrder={(order: Order) => {setOrders([...orders!, order]); }}/>}
        </div>
        <div className='border-t border-[#C8C8C8] mt-[17px]'>
            <TableHeaders cells={orderTableCells} onHeaderClick={onHeaderClick}/>
            {getPaginatedOrders().map((order, i) => {
                return <OrderItem orderItem={order} key={order.id}/>
            })}
        </div>
        <Pagination ordersCount={getOrders().length} onPageChanged={onPageChanged} currentPage={currentPage}/>
    </div>
  );
}

export default Table;
