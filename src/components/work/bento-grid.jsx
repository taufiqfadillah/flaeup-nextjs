'use client';
import React from 'react';
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid.tsx';

export function BentoGridDemo({ items = [], category }) {
  // Filter items based on the selected category
  const filteredItems = category === 'All' ? items : items.filter((item) => item.dataCategory === category);

  return (
    <BentoGrid className="w-full h-full">
      {filteredItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton src={item.image} type={item.type} />}
          image={item.image}
          data-category={item.dataCategory}
          href={item.href}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ src, type }) => {
  if (type === 'video') {
    return (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white dark:from-white dark:to-white to-white">
        <video className="object-cover w-full h-full" style={{ maxHeight: '350px', maxWidth: '900px' }} autoPlay playsInline loop muted>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Default to image if type is not 'video'
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white dark:from-white dark:to-white to-white">
      <Image
        alt="Flaeup Project"
        fetchPriority="high"
        width={800}
        height={800}
        className="max-[1024px]:opacity-100 object-cover opacity-0 w-[100%]"
        style={{ color: 'transparent', opacity: 1, maxHeight: '350px', maxWidth: '900px' }}
        src={src}
        priority
      />
    </div>
  );
};

const items = [
  {
    title: 'Branding',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/Branding Video.mp4',
    dataCategory: 'Branding',
    type: 'video',
    href: '#',
  },
  {
    title: 'UI/UX',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/UIUX Video.mp4',
    dataCategory: 'UIUX',
    type: 'video',
    href: '#',
  },
  {
    title: 'Retouching',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/Retouching Video.mp4',
    dataCategory: 'Retouching',
    type: 'video',
    href: '#',
  },
  {
    title: 'Packaging',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/Muhammad Ali Packaging-01.jpg',
    dataCategory: 'Packaging',
    type: 'image',
    href: '#',
  },
  {
    title: 'Social Media',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/Muhammad Ali Packaging-01.jpg',
    dataCategory: 'Social Media',
    type: 'image',
    href: '#',
  },
  {
    title: 'Apps',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/Muhammad Ali Packaging-01.jpg',
    dataCategory: 'Apps',
    type: 'image',
    href: '#',
  },
  {
    title: 'Copywriting',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/video/Muhammad Ali Packaging-01.jpg',
    dataCategory: 'Copywriting',
    type: 'image',
    href: '#',
  },
  {
    title: 'Hanny&Friends',
    description: 'Company Profile & Copywriting.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/work/hanny&friend.jpg',
    dataCategory: 'Company Profile',
    type: 'image',
    href: 'https://www.instagram.com/hannyandfriends/',
  },
];

items.sort((a, b) => a.dataCategory.localeCompare(b.title));

export { items };
