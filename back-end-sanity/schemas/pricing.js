export default {
  title: "Pricing",
  name: "pricing",
  type: "document",
  fields: [
    {
      title: "Featured",
      name: "featured",
      type: "boolean"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "string"
    },
    {
      title: "Price",
      name: "price",
      type: "number"
    },
    {
      title: "Features",
      name: "features",
      type: "array",
      of: [
        {
          title: "Feature",
          name: "feature",
          type: "string"
        }
      ]
    }
  ]
}
