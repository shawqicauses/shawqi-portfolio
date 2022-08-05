export default {
  title: "About",
  name: "about",
  type: "document",
  fields: [
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
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Order",
      name: "order",
      type: "number"
    }
  ]
}
