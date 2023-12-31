import moment from 'moment';

export const Currencies: {[key: string]: string} = {
 ["EUR"]: "€",
}

export enum Status {
    New="New",
    InTransit="in transit",
    Delivered="Delivered"
}

export const getTotalString = (total: string, currency: string): string => {
    return `${Currencies[currency]}${total}`;
}

export const getFormatDate = (dateStr: string) => {
    const date = moment(dateStr);
    return date.format("DD.MM.YYYY")
}