export default {
  title: "Work",
  name: "work",
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
      title: "Demo Link",
      name: "demoLink",
      type: "string"
    },
    {
      title: "Source Code",
      name: "sourceCode",
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
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          title: "Tag",
          name: "tag",
          type: "string"
        }
      ]
    }
  ]
}
