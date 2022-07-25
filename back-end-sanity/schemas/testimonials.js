export default {
  title: "Testimonials",
  name: "testimonials",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Company",
      name: "company",
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
      title: "Feedback",
      name: "feedback",
      type: "string"
    }
  ]
}
