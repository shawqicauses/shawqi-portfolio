import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { client, urlForImage } from "../../client"
import { classes } from "../../utils/utils"

export default function About() {
  const [about, setAbout] = useState([])

  useEffect(() => {
    const query = ["*", "[_type == 'about']"].join("")
    client
      .fetch(query)
      .then(data => setAbout(data))
      .catch(error => console.log(error))
  }, [])

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
              "max-w-md text-left capitalize tracking-tight",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 md:max-w-lg",
              "xl:max-w-xl-3 lg:text-center"
            )}>
            I clearly know that good{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              development
            </span>{" "}
            means good{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              business
            </span>{" "}
            for you!
          </motion.h2>
          <motion.p
            variants={variants.item}
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-sm text-left tracking-normal text-zinc-500 xl:text-xl",
              "lg:max-w-xl-2 sm:max-w-md md:max-w-xl md:text-lg lg:text-center"
            )}>
            Trust me, this section is not a promotion for me as a professional,
            it is just what I really know and have a lot experience in
          </motion.p>
        </div>
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "xl-2:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-[3.75rem]"
          )}>
          {about.map((item, index) => (
            <motion.div
              key={index}
              variants={variants.item}
              className={classes(
                "group flex h-auto w-full",
                "flex-col items-start justify-start"
              )}>
              <img
                src={urlForImage(item.image)}
                alt={item.title}
                className={classes(
                  "aspect-video h-auto w-full object-center",
                  "rounded-xl-2 mb-8 translate-y-0 transform object-cover",
                  "grayscale transition duration-150 ease-linear lg:mb-10",
                  "group-hover:scale-105 group-hover:grayscale-0"
                )}
              />
              <span
                className={classes(
                  "font-monospace text-base font-medium",
                  "uppercase leading-none tracking-normal",
                  "mb-4 text-zinc-400 md:text-lg lg:mb-6"
                )}>
                {index + 1 >= 10 ? index : "0" + (index + 1)}
              </span>
              <h3
                className={classes(
                  "font-semi-bold text-left text-lg leading-none",
                  "text-left tracking-tight text-zinc-900",
                  "mb-4 mt-auto max-w-xs md:text-xl lg:mb-6"
                )}>
                {item.title}
              </h3>
              <p
                className={classes(
                  "text-sm font-normal leading-relaxed",
                  "text-left text-zinc-500 md:text-base"
                )}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
