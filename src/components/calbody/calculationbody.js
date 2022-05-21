import React from 'react';
import './calbody.css';
const CalculationBody=(props)=>{
    const totalCalculation=()=>{
        let total=0;
        let diff=props.price * 5 /100;
       return total=props.price - diff;
    }
    return (<>
             <div className='cal-conatiner'>
                 <div className='text-cal'>
                     <p>S.Total</p>
                     <p>Tax</p>
                     <p>Total</p>
                 </div>
                 <div className='result-complete'>
                     <p>{props.price}</p>
                     <p>$5</p>
                     <p>{totalCalculation()}</p>
                 </div>
             </div>
    </>)
}
export default CalculationBody;