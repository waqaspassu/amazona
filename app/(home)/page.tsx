import { HomeCard } from '@/components/shared/home/home-card'
import { HomeCarousel } from '@/components/shared/home/home-carousel'
import ProductSlider from '@/components/shared/product/product-slider'
import { Card, CardContent } from '@/components/ui/card'
import {
  getAllCategories,
  getAllProductForCard,
  getProductByTags,
} from '@/lib/actions/product.actions'
import data from '@/lib/data'
import { toSlug } from '@/lib/utils'

export default async function Page() {
  const categories = (await getAllCategories()).slice(0, 4)

  const newArrival = await getAllProductForCard({
    tag: 'new-arrival',
    limit: 4,
  })
  const bestSeller = await getAllProductForCard({
    tag: 'best-seller',
    limit: 4,
  })

  const featuredAd = await getAllProductForCard({
    tag: 'featured',
    limit: 4,
  })

  const cards = [
    {
      title: 'Categories to Explore ',
      link: {
        text: 'View All',
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category,
        href: `/search?category=${category}`,
        image: `/images/${toSlug(category)}.jpg`,
      })),
    },
    {
      title: 'Explore new arrivial ',
      link: {
        text: 'View All',
        href: '/search?tag=new-arrivial',
      },
      items: newArrival,
    },
    {
      title: 'Discover Best Sellers ',
      link: {
        text: 'View All',
        href: '/search?tag=new-arrivial',
      },
      items: bestSeller,
    },
    {
      title: 'Featured Products',
      items: featuredAd,
      link: {
        text: 'View All',
        href: '/search?tag=new arrivial',
      },
    },
  ]

  const todaysDeals = await getProductByTags({ tag: 'todays-deal', limit: 10 })
  const bestSellingProducts = await getProductByTags({
    tag: 'best-seller',
    limit: 10,
  })

  return (
    <>
      <HomeCarousel items={data.carousel} />
      <div className='md:p-4 md:space-y-4 bg:border'>
        <HomeCard cards={cards} />
        <Card className='width-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title="Today's Deal" products={todaysDeals} />
          </CardContent>
        </Card>
        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider
              title='Best Sellers'
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
