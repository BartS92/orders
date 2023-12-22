import React from 'react';
import { OrderHeaderProps, Sort } from './OrderHeaderTypes';
import OrderHeaderItem from '../orderHeaderItem/OrderHeaderItem';


const OrderHeaders = ({ cells, onHeaderClick } : OrderHeaderProps) => {

    return (
        <div className="w-full flex flex-col flex-nowrap rounded-md overflow-hidden flex-fixed-size font- mt-4 mb-4">
            <div className="flex flex-nowrap justify-start align-baseline bg-primary-300 px-5 py-2 text-sm">
                { cells
                    .map(
                        (cell, index) => (
                            <OrderHeaderItem key={index} title={cell.title} onHeaderClick={onHeaderClick(cell.sort)}/>
                        )
                    )}
            </div>
        </div>
    );
};

export default OrderHeaders;
