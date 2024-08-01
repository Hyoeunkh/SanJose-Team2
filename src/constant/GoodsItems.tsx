import cafe1 from '@/assets/cafe1.png';
import cafe2 from '@/assets/cafe2.png';
import cafe3 from '@/assets/cafe3.png';
import cafe4 from '@/assets/cafe4.png';
import cafe5 from '@/assets/cafe5.png';
import cafe6 from '@/assets/cafe6.png';
import consult1 from '@/assets/consult1.png';
import consult2 from '@/assets/consult2.png';
import consult3 from '@/assets/consult3.png';
import detailcafe from '@/assets/detailcafe.png';
import detailrest from '@/assets/detailrest.png';
import interior1 from '@/assets/interior1.png';
import interior2 from '@/assets/interior2.png';
import interior3 from '@/assets/interior3.png';
import rest1 from '@/assets/rest1.png';
import rest2 from '@/assets/rest2.png';
import rest3 from '@/assets/rest3.png';
import rest4 from '@/assets/rest4.png';
import rest5 from '@/assets/rest5.png';
import rest6 from '@/assets/rest6.png';

export interface Goods {
  key: number;
  imageSrc: string;
  name: string;
  star: number;
  title: string;
  amount: string;
  type?: string;
  fundrate?: number;
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
  hour: string[];
  marketing: string[];
  age: string[];
  type: string[];
}
export interface GoodsOption {
  imgUrl: string;
  title: string;
  description: string;
  type?: string;
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
    imageSrc: rest3,
    star: 4.5,
    name: 'Gyul, Park',
    title: 'Fusion Feast',
    amount: '250,000',
    type: 'RESTAURANT',
  },
  {
    key: 4,
    imageSrc: rest4,
    star: 4.6,
    name: 'Tim, Bark',
    title: 'Culinary Canvas',
    amount: '270,000',
    type: 'RESTAURANT',
  },
  {
    key: 5,
    imageSrc: rest5,
    star: 4.9,
    name: 'Kevin, Oh',
    title: 'Zenith Bistro',
    amount: '300,000',
    type: 'RESTAURANT',
  },
  {
    key: 6,
    imageSrc: rest6,
    star: 4.5,
    name: 'Juni, Park',
    title: 'Minimalist Morsels',
    amount: '200,000',
    type: 'RESTAURANT',
  },
  {
    key: 9,
    imageSrc: cafe2,
    star: 4.7,
    name: 'Ja Wook',
    title: 'Lumiere Cafe',
    amount: '200,000',
    type: 'CAFE',
  },
  {
    key: 10,
    imageSrc: cafe1,
    star: 4.8,
    name: 'Mike',
    title: 'Cafe Zenith',
    amount: '325,000',
    type: 'CAFE',
  },
  {
    key: 11,
    imageSrc: cafe2,
    star: 4.7,
    name: 'Ja Wook',
    title: 'Lumiere Cafe',
    amount: '200,000',
    type: 'CAFE',
  },
  {
    key: 12,
    imageSrc: cafe3,
    star: 4.7,
    name: 'JeRoot',
    title: 'The Modern Sip',
    amount: '201,000',
    type: 'CAFE',
  },
  {
    key: 13,
    imageSrc: cafe4,
    star: 4.6,
    name: 'hawon, lee',
    title: 'Cafe Novo',
    amount: '232,000',
    type: 'CAFE',
  },
  {
    key: 14,
    imageSrc: cafe5,
    star: 4.9,
    name: 'Ryujeans',
    title: 'Eco Friendly cafe',
    amount: '301,000',
    type: 'CAFE',
  },
  {
    key: 15,
    imageSrc: cafe6,
    star: 4.7,
    name: 'Tim, Bark',
    title: 'Aero Cafe',
    amount: '220,000',
    type: 'CAFE',
  },
  {
    key: 16,
    imageSrc: cafe1,
    star: 4.8,
    name: 'Mike',
    title: 'Cafe Zenith',
    amount: '325,000',
    type: 'FUNDING',
    fundrate: 89,
  },
  {
    key: 17,
    imageSrc: rest1,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '200,000',
    type: 'FUNDING',
    fundrate: 24,
  },
];

export const goodsDetailItems: GoodsDetail[] = [
  {
    key: 1,
    imageSrc: detailcafe,
    star: 4.7,
    name: 'Ja Wook',
    title: 'Lumiere Cafe',
    amount: '200,000',
    concept:
      'The Lumiere Cafe design is inspired by nature, blending modern aesthetics with natural elements. The interior features wooden and stone accents to create a warm and inviting atmosphere. This design aims to provide a relaxing and serene environment for our customers',
    location: 'San Fransisco, 95124',
    hour: ['afternoon', 'evening'],
    marketing: ['social media', 'traditional_ads', 'word of mouth', 'loyalty programs'],
    age: ['20s', '30s', '40s'],
    type: ['dine in', 'takeaway'],
  },
  {
    key: 2,
    imageSrc: detailrest,
    star: 4.7,
    name: 'Zac Brown',
    title: 'Eclipse Dining',
    amount: '200,000',
    concept:
      'The Cozy Corner restaurant design embraces an industrial theme, combining raw materials with modern touches. The interior features exposed brick walls, metal fixtures, and concrete floors, creating a chic and edgy atmosphere. This design aims to provide a unique and stylish dining experience for our guests.',
    location: 'San Fransisco, 95324',
    hour: ['all-day'],
    marketing: ['social media', 'loyalty programs'],
    age: ['20s', '30s', '40s', '50s'],
    type: ['dine in'],
  },
];

export const interiorOptionItems: GoodsOption[] = [
  {
    imgUrl: interior1,
    title: 'Studio O+A',
    description:
      'We help early-stage companies turn their office into a competitive advantage. Our team of workplace strategists ...',
    type: 'interior',
  },
  {
    imgUrl: interior2,
    title: 'Homepolish',
    description:
      'Our team of experts is dedicated to offering tailored solutions that drive growth and innovation. Partner with us to turn ...',
    type: 'interior',
  },
  {
    imgUrl: interior3,
    title: 'Gensler',
    description:
      'We help early-stage companies turn their office into a competitive advantage. Our team of workplace ...',
    type: 'interior',
  },
];
export const consultOptionItems: GoodsOption[] = [
  {
    imgUrl: consult1,
    title: 'Nexus Consulting',
    description:
      'Welcome to Nexus Consulting! We specialize in providing comprehensive business strategies and market analysis to help startups achieve their...',
    type: 'consult',
  },
  {
    imgUrl: consult2,
    title: 'Innovate Solutions',
    description:
      'At Innovate Solutions, we focus on delivering cutting-edge consulting services for emerging businesses. Our expertise includes financial planning ...',
    type: 'consult',
  },
  {
    imgUrl: consult3,
    title: 'Elevate Advisors',
    description:
      'Welcome to Elevate Advisors! We specialize in guiding startups through the complexities of business development and strategic planning ...',
    type: 'consult',
  },
];
