/**@type { import("drizzle-kit").config} */
export default {
  schema: "./configs/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ecommercedb_owner:Dos8q5KGSlOc@ep-empty-mode-a5m7wbn7.us-east-2.aws.neon.tech/ecommercedb?sslmode=require'
  }
};