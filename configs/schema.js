
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const ProductList = pgTable('productList', {
  id: serial('id').primaryKey(),
  productName: varchar('productName', 100).notNull(),
  price: varchar('price').notNull(),
  brand: varchar('brand').notNull(),
  stockQuantity: varchar('stockQuantity').notNull(),
  description: varchar('description'),
  category: varchar('category').notNull(),
  manufacturer: varchar('manufacturer').notNull(),
  return: varchar('return').notNull(),
  warranty: varchar('warranty').notNull(),
  rating: varchar('rating').notNull(),
})
export const ProductImage = pgTable('productImage', {
  id: serial('id').primaryKey(),
  imageUrl: varchar('imageUrl').notNull(),
  productListingId: integer('productListingId').notNull().references(()=>ProductList.id),
})