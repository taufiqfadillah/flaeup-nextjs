'use client';

import Image from 'next/image';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid.tsx';
import { v4 as uuidv4 } from 'uuid';

export function BentoGridDemo({ category }) {
  // Filter items based on the selected category
  const filteredItems = category === 'All' ? items : items.filter((item) => item.dataCategory.includes(category));

  return (
    <BentoGrid className="w-full h-full">
      {filteredItems.map((item, i) => (
        <BentoGridItem
          key={item.id}
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
  // {
  //   id: uuidv4(),
  //   title: 'Branding',
  //   description: 'Explore the birth of groundbreaking ideas and inventions.',
  //   header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
  //   image: '/images/video/Branding Video.mp4',
  //   dataCategory: 'Branding',
  //   type: 'video',
  //   href: '#',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'UI/UX',
  //   description: 'Dive into the transformative power of technology.',
  //   header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
  //   image: '/images/video/UIUX Video.mp4',
  //   dataCategory: 'UIUX',
  //   type: 'video',
  //   href: '#',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Retouching',
  //   description: 'Discover the beauty of thoughtful and functional design.',
  //   header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
  //   image: '/images/video/Retouching Video.mp4',
  //   dataCategory: 'Retouching',
  //   type: 'video',
  //   href: '#',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Social Media',
  //   description: 'Join the quest for understanding and enlightenment.',
  //   header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
  //   image: '/images/video/Muhammad Ali Packaging-01.jpg',
  //   dataCategory: 'Social Media',
  //   type: 'image',
  //   href: '#',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Apps',
  //   description: 'Experience the thrill of bringing ideas to life.',
  //   header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
  //   image: '/images/video/Muhammad Ali Packaging-01.jpg',
  //   dataCategory: 'Apps',
  //   type: 'image',
  //   href: '#',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Copywriting',
  //   description: 'Embark on exciting journeys and thrilling discoveries.',
  //   header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
  //   image: '/images/video/Muhammad Ali Packaging-01.jpg',
  //   dataCategory: 'Copywriting',
  //   type: 'image',
  //   href: '#',
  // },
  {
    id: uuidv4(),
    title: 'Perfume Legacy Oud Round Muhammad Ali',
    description: 'Product Packaging Design.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/work/Parfum Muhammad Ali.jpg',
    dataCategory: ['Packaging'],
    type: 'image',
    href: 'https://dribbble.com/shots/24633119-Muhammad-Ali-Packaging-design-for-Perfume',
  },
  {
    id: uuidv4(),
    title: 'Hanny&Friends',
    description: 'Company Profile & Copywriting.',
    header: <Skeleton src="https://fakeimg.pl/600x600/f5f5f5/000" />,
    image: '/images/work/hanny&friend.jpg',
    dataCategory: ['Company Profile', 'Copywriting'],
    type: 'image',
    href: 'https://dribbble.com/shots/24634061-Company-Profile-Design-HannyandFriends',
  },
];

items.sort((a, b) => a.dataCategory[0].localeCompare(b.dataCategory[0]));

export { items };
