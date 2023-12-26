import { NewOrderPropertyProps } from './NewOrderTypes';


const NewOrderProperty = (props: NewOrderPropertyProps) => {

    return (
        <div className='flex flex-nowrap items-center justify-items-center mb-[15px]'>
            <span className='grow w-[120px] leading-10 font-light'>{props.title}</span>
            <input className='font-light grow h-[40px] w-[260px] bg-[#EFEFEF] pl-[20px] border-0 focus:outline-none' placeholder={props.title} onChange={props.onChange} />
        </div>
    );
}

export default NewOrderProperty;
