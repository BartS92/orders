import { Order } from '../../store/apis/baseApi';


export type NewOrderPropertyProps = {
    name: string,
    title: string,
    onChange: (e: any) => void

}

export type NewOrderProps = {
    onClose: () => void,
    onAddOrder: (order: Order) => void
}