import { classes } from "../../utils/utils"

export default function Skills() {
  const data = [
    {
      title: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "SCSS", "TypeScript", "React.JS"]
    },
    {
      title: "Back-end",
      skills: ["Node.JS", "Express.JS", "Mongo.DB", "Gatsby.JS", "Next.JS"]
    },
    {
      title: "UI Design",
      skills: ["Design Principles", "Web Design", "Figma", "Adobe XD"]
    },
    {
      title: "Other Tools",
      skills: ["Linux Basics", "Git - GitHub", "Trello", "Linear", "Notion"]
    }
  ]

  const colors = [
    "from-green-600 to-teal-300 shadow-lg shadow-teal-500/50",
    "from-cyan-600 to-blue-300 shadow-lg shadow-blue-500/50",
    "from-indigo-600 to-purple-300 shadow-lg shadow-purple-500/50",
    "from-fuchsia-600 to-rose-300 shadow-lg shadow-rose-500/50"
  ]

  return (
    <section
      id="skills"
      className={classes(
        "flex flex-col items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <div
        className={classes(
          "xl-2:max-w-xl-7 container mx-auto px-5",
          "flex flex-col items-start justify-start gap-0",
          "lg:items-center lg:justify-center"
        )}>
        <div
          className={classes(
            "flex flex-col items-start justify-start",
            "lg:items-center lg:justify-center",
            "mb-[3.75rem] gap-3 lg:mb-20"
          )}>
          <h2
            className={classes(
              "font-semi-bold text-xl-2 relative leading-tight",
              "max-w-md text-left capitalize tracking-tight",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 md:max-w-lg",
              "xl:max-w-xl-3 lg:text-center"
            )}>
            I build that{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              experiences
            </span>{" "}
            connect to audience and brands, no{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              matter
            </span>{" "}
            the size
          </h2>
          <p
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-sm text-left tracking-normal text-zinc-400 xl:text-xl",
              "lg:max-w-xl-2 sm:max-w-md md:max-w-xl md:text-lg lg:text-center"
            )}>
            Whatever the challenge you may have, we are here to help to
            transform your business ideas into innovative solutions
          </p>
        </div>
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "sm:grid-cols-2 lg:grid-cols-4"
          )}>
          {data.map((item, index) => (
            <div
              className={classes(
                "flex h-auto w-full flex-col flex-wrap",
                "items-start justify-start gap-4 lg:gap-6"
              )}>
              <h3
                className={classes(
                  "font-semi-bold h-auto w-full text-base leading-none",
                  "truncate text-left uppercase tracking-widest text-white",
                  "rounded-lg bg-gradient-to-br p-5",
                  colors[index]
                )}>
                {item.title}
              </h3>
              <ul
                className={classes(
                  "flex h-auto w-full flex-col flex-wrap",
                  "items-start justify-start gap-2 lg:gap-4"
                )}>
                {item.skills.map(skill => (
                  <li
                    className={classes(
                      "h-auto w-full text-sm font-medium leading-none lg:text-base",
                      "truncate text-left uppercase tracking-widest text-zinc-400",
                      "rounded-lg bg-gradient-to-br from-zinc-800/20 to-zinc-700/20 p-5"
                    )}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
