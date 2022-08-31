import Desktop from './Desktop';
import Mobile from './Mobile';

const AppBar = ({ category }) => {
  return (
    <>
    <Mobile category={category} />
    <Desktop category={category} />
    </>
  );
};

export default AppBar;
