import { useState } from 'react';
import plans from './plans';
import Radio from './Radio';

const RadioGroup = () => {
    const [selectedPlan, setSelectedPlan]= useState('Startup');
    const clickHandler = (currentPlan)=>{setSelectedPlan(currentPlan)}
  return (
    <div className=" h-screen w-full  rounded-lg flex justify-center items-center flex-col gap-3 bg-blue-600">
      {plans.map((plan) => {
        return <Radio plan={plan} key={plan.name} SelectedPlan={selectedPlan} onClick={clickHandler} />;
      })}
    </div>
  );
};

export default RadioGroup;
