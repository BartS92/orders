import { Order } from '../../store/apis/baseApi';


export enum Sort {
    Ascending,
    Descending
}


export type OrderHeaderProps = {
    cells: { title: string, sort?: (a:Order, b:Order) =>  number}[],
    onHeaderClick: (sortFunc?: (a:Order, b:Order) =>  number) => (sort: Sort) => void
}