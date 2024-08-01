import cafe1 from '@/assets/cafe1.png';
import rest1 from '@/assets/rest1.png';
import rest2 from '@/assets/rest2.png';

export interface Goods {
  key: number;
  imageSrc: string;
  name: string;
  star: number;
  title: string;
  amount: string;
  type?: string;
}
export interface GoodsDetail {
  key: number;
  imageSrc: string;
  name: string;
  star: number;
  title: string;
  amount: string;
  concept: string;
  location: string;
  hour: string;
  marketing: string[];
  age: string;
  type: string[];
}

export const goodsItems: Goods[] = [
  {
    key: 1,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '200,000',
    type: 'RESTAURANT',
  },
  {
    key: 2,
    imageSrc: rest2,
    star: 4.8,
    name: 'Hyoki, Lee',
    title: 'Urban Plate',
    amount: '220,000',
    type: 'RESTAURANT',
  },
  {
    key: 3,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '250,000',
    type: 'RESTAURANT',
  },
  {
    key: 4,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '270,000',
    type: 'RESTAURANT',
  },
  {
    key: 5,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '300,000',
    type: 'RESTAURANT',
  },
  {
    key: 6,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '200,000',
    type: 'RESTAURANT',
  },
  {
    key: 7,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '220,000',
    type: 'RESTAURANT',
  },
  {
    key: 8,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '203,000',
    type: 'RESTAURANT',
  },
  {
    key: 9,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '340,000',
    type: 'RESTAURANT',
  },
  {
    key: 10,
    imageSrc: cafe1,
    star: 4.5,
    name: 'Mike',
    title: 'Cafe Zenith',
    amount: '325,000',
    type: 'CAFE',
  },
  {
    key: 11,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '200,000',
    type: 'CAFE',
  },
  {
    key: 12,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '201,000',
    type: 'CAFE',
  },
  {
    key: 13,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '232,000',
    type: 'CAFE',
  },
  {
    key: 14,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '301,000',
    type: 'CAFE',
  },
  {
    key: 15,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '230,000',
    type: 'CAFE',
  },
  {
    key: 16,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '200,000',
    type: 'CAFE',
  },
  {
    key: 17,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '310,000',
    type: 'CAFE',
  },
];

export const goodsDetailItems: GoodsDetail[] = [
  {
    key: 1,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Lumiere Cafe',
    amount: '250,000',
    concept:
      "The Cozy Corner is a small cafe located in the heart of the city. The design is inspired by the warm and inviting atmosphere of a classic Parisian bistro. With its elegant decor, comfortable seating, and delicious pastries, it's the perfect place to relax and enjoy a cup of coffee with friends or colleagues.",
    location: 'San Fransisco, 95124',
    hour: 'afternoon<br/>evening',
    marketing: ['social media', 'traditional_ads', 'word of mouth', 'loyalty programs'],
    age: '20s<br/>30s<br/>40s',
    type: ['dine in', 'takeaway'],
  },
  {
    key: 2,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Lumiere Cafe',
    amount: '250,000',
    concept:
      "The Cozy Corner is a small cafe located in the heart of the city. The design is inspired by the warm and inviting atmosphere of a classic Parisian bistro. With its elegant decor, comfortable seating, and delicious pastries, it's the perfect place to relax and enjoy a cup of coffee with friends or colleagues.",
    location: 'San Fransisco, 95124',
    hour: 'afternoon<br/>evening',
    marketing: ['social media', 'traditional_ads', 'word of mouth', 'loyalty programs'],
    age: '20s<br/>30s<br/>40s',
    type: ['dine in', 'takeaway'],
  },
];
