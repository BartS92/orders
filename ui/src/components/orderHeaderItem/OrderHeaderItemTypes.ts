import { Order } from '../../store/apis/baseApi';

export enum Sort {
    Ascending,
    Descending
}


export type OrderHeaderItemProps = {
    title: string,
    key: any,
    onHeaderClick: (sort: Sort) => void
}