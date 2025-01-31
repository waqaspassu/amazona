import { IProductInput } from '@/types'
import { model, Model, models, Schema, Document } from 'mongoose'

export interface IProduct extends Document, IProductInput {
  _id: string
  createdAt: Date
  updatedAt: Date
}
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images: [String],
    brand: { type: String, required: true },
    description: { type: String, trim: true },
    isPublished: { type: Boolean, required: true, default: false },
    price: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    tags: { type: [String], default: ['New Arrivals'] },
    sizes: { type: [String], default: ['S', 'M', 'L', 'XL', 'XXL'] },
    colors: {
      type: [String],
      default: ['White', 'Red', 'Black'],
    },
    avgRating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, default: 0, required: true },
    ratingDistribution: [
      {
        rating: { type: Number, required: true },
        count: { type: Number, required: true },
      },
    ],
    numSales: { type: Number, default: 0, required: true },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        default: [],
      },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
)

const Product =
  (models.Product as Model<IProduct>) ||
  model<IProduct>('Product', productSchema)
export default Product
