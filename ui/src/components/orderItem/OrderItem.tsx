import { OrderItemProps } from './OrderItemTypes';
import { getFormatDate, getTotalString } from './OrderItemUtils';

const OrderItem = (props: OrderItemProps) => {
    const order = props.orderItem;
    const createDataCell = (data: any, value?: any) => {
        return <div className='px-3 flex-fixed-size flex-1' data-value={value}>{data}</div>;
    }

    const createStyledDataCell = (data: any) => {
        return <div className='px-3 flex-fixed-size flex-1 items-center justify-items-center flex'>
            <div className='leading-8 rounded-[12px] bg-[#707070]/20 overflow-hidden w-fit px-7'>{data}</div>
        </div>;
    }

    return (
        <div className='w-full  border-t first:border-0  border-[#C8C8C8] flex flex-col flex-nowrap rounded-md overflow-hidden flex-fixed-size mb-1 font-light'>
            <div className="flex flex-nowrap justify-start align-baseline bg-primary-300 px-5 leading-10 text-sm">
                {createDataCell(order.id)}
                {createDataCell(getFormatDate(order.date))}
                {createDataCell(getTotalString(order.total, order.currency), order.total)}
                {createDataCell(order.quantity)}
                {createStyledDataCell(order.status)}
            </div>
        </div>
    );
}

export default OrderItem;
