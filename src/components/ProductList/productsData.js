import AppleWatch6 from '../../utility/images/apple_watch6.png';
import AppleWatch7 from '../../utility/images/apple_watch7.png';

export const productCategories = {
  SMART_WATCH: 'ساعت هوشمند',
  SMART_PHONE: 'تلفن همراه هوشمند',
};

const productsData = [
  {
    name: 'ساعت هوشمند اپل سری 6',
    price: '8,000,000',
    colors: ['bg-blue-400', 'bg-yellow-400', 'bg-green-400'],
    isLastOne: false,
    image: AppleWatch6,
    brand: 'اپل',
    id: 0,
    category: productCategories.SMART_WATCH,
  },
  {
    name: 'ساعت هوشمند اپل سری 6',
    price: '9,500,000',
    colors: ['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400'],
    isLastOne: false,
    image: AppleWatch6,
    brand: 'اپل',
    id: 1,
    category: productCategories.SMART_WATCH,
  },
  {
    name: 'ساعت هوشمند اپل سری 7',
    price: '15,500,000',
    colors: ['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400'],
    isLastOne: false,
    image: AppleWatch7,
    brand: 'اپل',
    id: 2,
    category: productCategories.SMART_WATCH,
  },
  {
    name: 'ساعت هوشمند اپل سری 7',
    price: '16,500,000',
    colors: ['bg-red-400', 'bg-blue-400', 'bg-yellow-400'],
    isLastOne: true,
    image: AppleWatch7,
    brand: 'اپل',
    id: 3,
    category: productCategories.SMART_WATCH,
  },
  {
    name: 'ساعت هوشمند اپل سری 7',
    price: '16,500,000',
    colors: ['bg-red-400', 'bg-yellow-400', 'bg-green-400'],
    isLastOne: false,
    image: AppleWatch7,
    brand: 'اپل',
    id: 4,
    category: productCategories.SMART_WATCH,
  },
];

export default productsData;
