import axios from 'axios';

// const HOST= 'localhost:8080'
const SERVICE_API = 'https://outvio-dev-public1.s3.eu-central-1.amazonaws.com/json'

const RESOURCE_FILE = 'orders.json'

export type Order = {
    id: string;
    total: string;
    currency: string;
    quantity: string;
    status: string;
    date: string;
}


export const fetchOrders = async () => {
    return (await axios(`${ SERVICE_API }/${ RESOURCE_FILE }`));
}