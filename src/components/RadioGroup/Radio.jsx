import CheckCircleSvg from './CheckCircleSvg';

const Radio = ({ plan, SelectedPlan, onClick }) => {
  const isSelected = SelectedPlan === plan.name;
  return (
    <div
      onClick={() => {
        onClick(plan.name);
      }}
      className={`transition-all cursor-pointer bg-white w-1/3 p-4 rounded-xl flex items-center justify-between ${
        isSelected && 'ring-2 ring-blue-300 bg-blue-400 text-white'
      } `}
    >
      <div>
        <p>{plan.name}</p>
        <span>
          {plan.ram} {plan.cpus} {plan.disk}
        </span>
      </div>

      {isSelected && (
        <div className="bg-blue-600 rounded-full p-1">
          <CheckCircleSvg />
        </div>
      )}
    </div>
  );
};

export default Radio;
