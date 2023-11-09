export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'image',
      type: 'array',
      title: 'Product Image',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'discription',
      type: 'text',
      title: 'Discription of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Product Category',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
