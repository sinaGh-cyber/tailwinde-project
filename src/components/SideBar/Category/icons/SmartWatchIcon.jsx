import IconContainer from '../../IconContainer';

const SmartWatchIcon = ({ isActive }) => {
  return (
    <IconContainer isActive={isActive}>
      <svg
        className={`w-6 h-6 absolute top-1.5 right-1.5   ${
          isActive ? 'stroke-slate-900' : ' stroke-slate-600'
        } `}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M5.666 12.667h4.667c1.553 0 2.333-.78 2.333-2.333V5.667c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333zM10.666 1.334H5.333M10.666 14.666H5.333"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M7.667 6.334v2h2"
        ></path>
      </svg>
    </IconContainer>
  );
};

export default SmartWatchIcon;
