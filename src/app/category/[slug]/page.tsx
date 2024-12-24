import Menucard from '@/components/menucard';
import { menuItems } from '@/app/utils/mock';

const getmenuItemsByCategory = (category: string) => {
  return menuItems.filter((item) => item.category === category);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const result = getmenuItemsByCategory(slug);

  return (
    <div className='grid grid-cols-2 gap-10 mt-20'>
      {result.map((item) => (
        <Menucard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
