import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { client } from "../../client"
import { classes } from "../../utils/utils"

export default function Skills() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = ["*", "[_type == 'skills']"].join("")
    client
      .fetch(query)
      .then(data => setSkills(data))
      .catch(error => console.log(error))
  }, [])

  const colors = [
    "from-green-600 to-teal-300 shadow-lg shadow-teal-500/50",
    "from-cyan-600 to-blue-300 shadow-lg shadow-blue-500/50",
    "from-indigo-600 to-purple-300 shadow-lg shadow-purple-500/50",
    "from-fuchsia-600 to-rose-300 shadow-lg shadow-rose-500/50"
  ]

  const variants = {
    container: {
      hidden: {
        transition: {
          delayChildren: 0,
          staggerChildren: 0.125,
          staggerDirection: -1
        }
      },
      visible: {
        transition: {
          delayChildren: 0,
          staggerChildren: 0.125,
          staggerDirection: 1
        }
      }
    },
    item: {
      hidden: {
        y: 20,
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 100
        }
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100
        }
      }
    }
  }

  return (
    <section
      id="skills"
      className={classes(
        "flex flex-col items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
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
          <motion.h2
            variants={variants.item}
            className={classes(
              "font-semi-bold text-xl-2 relative leading-tight",
              "max-w-xl-2 text-left capitalize tracking-tight lg:text-center",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 xl:max-w-xl-3"
            )}>
            I build{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              experiences
            </span>{" "}
            that connect to audiences and brands, whatever the{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              size
            </span>{" "}
            is
          </motion.h2>
          <motion.p
            variants={variants.item}
            className={classes(
              "text-base font-normal leading-normal",
              "max-w-xl-2 text-left tracking-normal text-zinc-400",
              "md:text-lg lg:text-center xl:text-xl"
            )}>
            Don't mind the challenges you have. I am here to help you to
            transform your business ideas into innovative solutions
          </motion.p>
        </div>
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "sm:grid-cols-2 lg:grid-cols-4"
          )}>
          {skills.map((item, index) => (
            <div
              key={index}
              className={classes(
                "flex h-auto w-full flex-col flex-wrap",
                "items-start justify-start gap-4 lg:gap-6"
              )}>
              <motion.h3
                variants={variants.item}
                className={classes(
                  "font-semi-bold h-auto w-full text-base leading-none",
                  "truncate text-left uppercase tracking-widest text-white",
                  "rounded-xl bg-gradient-to-br p-5",
                  colors[index]
                )}>
                {item.title}
              </motion.h3>
              <ul
                className={classes(
                  "flex h-auto w-full flex-col flex-wrap",
                  "items-start justify-start gap-2 lg:gap-4"
                )}>
                {item.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={variants.item}
                    className={classes(
                      "h-auto w-full text-sm font-medium leading-none lg:text-base",
                      "truncate text-left uppercase tracking-widest text-zinc-400",
                      "rounded-xl bg-gradient-to-br from-zinc-800/20 to-zinc-700/20 p-5"
                    )}>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
