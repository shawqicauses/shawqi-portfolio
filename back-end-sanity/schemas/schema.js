// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"
import about from "./about"
import blog from "./blog"
import skills from "./skills"
import testimonials from "./testimonials"
import work from "./work"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([testimonials, about, work, skills, blog])
})
