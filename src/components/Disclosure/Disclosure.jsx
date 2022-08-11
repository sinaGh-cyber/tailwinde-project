import Accordion from './accordion';
import qAndAs from './q&a';

const Disclosure = () => {
  return (
    <div className="bg-white p-2 rounded-xl max-w-md w-full flex flex-col gap-4">
      {qAndAs.map((qAndA) => {
        return <Accordion qAndA={qAndA} key={qAndA.question} />;
      })}
    </div>
  );
};

export default Disclosure;
