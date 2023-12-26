import { Order } from '../../store/apis/baseApi';


export type NewOrderPropertyProps = {
    name: string,
    title: string,
    onChanged: (e: any) => void

}

export type NewOrderProps = {
    close: () => void,
    addOrder: (order: Order) => void
}