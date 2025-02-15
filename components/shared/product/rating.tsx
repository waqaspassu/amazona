import { Star } from 'lucide-react'

export default function Rating({
  rating = 0,
  size = 6,
}: {
  rating: number
  size?: number
}) {
  const fullStar = Math.floor(rating)
  const partialStar = rating % 1
  const emptyStar = 5 - Math.ceil(rating)

  console.log(partialStar, fullStar, emptyStar)
  return (
    <div
      className='flex items-center'
      aria-label={`Rating: ${rating} out of 5 star`}
    >
      {[
        [...Array(fullStar)].map((_, i) => {
          return (
            <Star
              key={i}
              className={`w-${size} h-${size} fill-primary text-primary`}
            />
          )
        }),
      ]}
      {partialStar > 0 && (
        <div className='relative'>
          <Star className={`w-${size} h-${size} text-primary`} />
          <div
            className='absolute top-0 left-0 overflow-hidden'
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className={`w-6 h-6 fill-primary text-primary`} />
          </div>
        </div>
      )}
      {[...Array(emptyStar)].map((_, i) => {
        return (
          <Star
            key={`empty-${i}`}
            className={`w-${size} h-${size} text-primary`}
          />
        )
      })}
    </div>
  )
}
