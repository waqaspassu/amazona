import { loadEnvConfig } from '@next/env'
import { cwd } from 'process'
import { connectToDatabase } from '.'
import Product from './models/product.model'
import data from '../data'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const products = data.products
    await connectToDatabase(process.env.MONGODB_URI)
    await Product.deleteMany({})
    const createProducts = await Product.insertMany(products)
    console.log({
      createProducts,
      message: 'Seeded database sucessfully',
    })

    process.exit(0)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to seed database')
  }
}
main()
