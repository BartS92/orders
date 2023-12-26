import * as Yup from 'yup';
import { ValidationError } from 'yup';
import { Order } from '../../store/apis/baseApi';


const idRegExp = /[0-9]{7}$/i;
const numberRegExp = /[0-9]{1,}/i;
const dateRexExp = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i;
const statusRexExp = /^([nN]ew|[iI]n transit|[Dd]elivered)$/i;

const OrderValidationSchema = Yup.object().shape({
    id: Yup.string().matches(idRegExp, 'Wrong id. The length should be as 7'),
    total: Yup.string().matches(numberRegExp, 'Wrong total'),
    quantity: Yup.string().matches(numberRegExp, 'Wrong quantity'),
    status: Yup.string().matches(statusRexExp, 'Wrong status. It should as "New", "In transit", "Delivered"'),
    date: Yup.string().matches(dateRexExp, 'Wrong date')
});


export const validate = async (order?: Order) => {

    return OrderValidationSchema.validate(order, { abortEarly: false })
        .catch(err => {
            let errors = {};
            err.inner.forEach((e: ValidationError) => {
                if (e.path) {
                    errors = { ...errors, [e.path]: e.message };
                }
            })

            return ({ errors })
        });
};