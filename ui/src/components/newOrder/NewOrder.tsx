import { NewOrderProps } from './NewOrderTypes';
import NewOrderProperty from './NewOrderProperty';
import { ChangeEvent, useState } from 'react';
import { Order } from '../../store/apis/baseApi';
import { validate } from './NewOrderUtils';


const NewOrder = ({addOrder, close}: NewOrderProps) => {
    const [order, setOrder] = useState<Order>({
        quantity:'',
        total:'',
        id:'',
        status:'',
        date:'',
        currency: 'EUR'
    });


    const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setOrder({ ...order, [name]: event.target.value } as Order);
    }

    const handleCreate = async () => {
        const validationResult = await validate(order) as any;
        if (validationResult.errors && Object.keys(validationResult.errors).length > 0){
            let msg = '\n';
            Object.keys(validationResult.errors).forEach(err => msg += validationResult.errors[err] + '\n');
            alert('Please fix errors'+msg);
            return;
        }

        addOrder(order!);
        close();
    }

    return (
        <>
            <div className='w-full h-full bg-slate-300 absolute top-0 left-0 opacity-60'/>
            <div className='w-[467px] h-[456px] border-[1px] border-[#707070] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white '>
                <div className='flex pt-[40px] pl-[35px] pr-[50px] pb-[25px]'>
                    <span className='text-2xl font-bold flex-1'>Add order </span>
                    <div><i className='fa fa-times flex-1 hover:cursor-pointer' aria-hidden='true' onClick={close}/></div>
                </div>
                <div className='px-[40px]'>
                    <NewOrderProperty name='id' title='Order ID' onChanged={handleChange('id')} />
                    <NewOrderProperty name='date' title='Order Date'  onChanged={handleChange('date')}/>
                    <NewOrderProperty name='total' title='Order Total'  onChanged={handleChange('total')}/>
                    <NewOrderProperty name='quantity' title='Quantity'  onChanged={handleChange('quantity')}/>
                    <NewOrderProperty name='status' title='Status'  onChanged={handleChange('status')}/>
                    <button className='mt-[10px] h-[40px] w-[110px] bg-black text-white float-right' onClick={handleCreate}>Add order</button>
                </div>

            </div>
        </>
    );
}

export default NewOrder;
