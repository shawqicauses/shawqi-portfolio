export default {
  title: "Blog",
  name: "blog",
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
    }
  ]
}
