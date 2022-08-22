import { useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { MOST_Favorite } from './tabTypes';

const SortAndFilter = () => {
  const [activeTab, setActiveTab] = useState(MOST_Favorite);

  const onClickHandler = ({ target }) => {
    setActiveTab(target.name)
  };
  return (
    <>
      <Desktop onClick={onClickHandler} activeTab={activeTab} />
      <Mobile />
    </>
  );
};

export default SortAndFilter;
