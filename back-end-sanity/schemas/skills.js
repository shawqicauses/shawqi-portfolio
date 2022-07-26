export default {
  title: "Skills",
  name: "skills",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [
        {
          title: "Skill",
          name: "skill",
          type: "string"
        }
      ]
    }
  ]
}
