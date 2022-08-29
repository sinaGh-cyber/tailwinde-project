import e2p from '../../../utility/functions/e2p';
const bracket_1_ = e2p('1 الی 3 میلیون تومان');
const bracket_2_ = e2p('3 الی 6 میلیون تومان');
const bracket_3_ = e2p('6 الی 9 میلیون تومان');
const bracket_4_ = e2p('9 الی 12 میلیون تومان');
const bracket_5_ = e2p('12 الی 20 میلیون تومان');
const bracket_6_ = e2p('بیشتر از 20 میلیون تومان');

export const priceData = [
  { label: bracket_1_, name: 'bracket_1_' },
  { label: bracket_2_, name: 'bracket_2_' },
  { label: bracket_3_, name: 'bracket_3_' },
  { label: bracket_4_, name: 'bracket_4_' },
  { label: bracket_5_, name: 'bracket_5_' },
  { label: bracket_6_, name: 'bracket_6_' },
];
