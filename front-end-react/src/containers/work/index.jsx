import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { client, urlForImage } from "../../client"
import { classes, variants } from "../../utils/utils"

export default function Work() {
  const [work, setWork] = useState([])

  useEffect(() => {
    const query = ["*", "[_type == 'work']"].join("")
    client
      .fetch(query)
      .then(data => setWork(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <section
      id="work"
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
            I bring things that are{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              necessary
            </span>{" "}
            to build stunning stand-alone{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              applications
            </span>{" "}
          </motion.h2>
          <motion.p
            variants={variants.item}
            className={classes(
              "text-base font-normal leading-normal",
              "max-w-xl-2 text-left tracking-normal text-zinc-400",
              "md:text-lg lg:text-center xl:text-xl"
            )}>
            I specialize in designing and building visual websites and web
            applications for your brands and products, no matter their sizes
          </motion.p>
        </div>
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "md:grid-cols-2 xl:gap-[3.75rem]"
          )}>
          {work.map((item, index) => (
            <motion.div
              key={index}
              variants={variants.item}
              className={classes(
                "group flex h-auto w-full",
                "flex-col items-start justify-start"
              )}>
              <img
                src={urlForImage(item.image)}
                alt={index}
                className={classes(
                  "aspect-[6/4] h-auto w-full object-top",
                  "translate-y-0 transform rounded-xl object-cover",
                  "mb-8 transition duration-150 ease-linear"
                )}
              />
              {(item.title && (
                <h3
                  className={classes(
                    "font-semi-bold text-lg leading-none",
                    "text-left tracking-tight text-white",
                    "mb-4 mt-auto max-w-xs md:text-xl"
                  )}>
                  {item.title}
                </h3>
              )) ||
                null}
              {(item.description && (
                <p
                  className={classes(
                    "text-sm font-normal leading-relaxed",
                    "text-left text-zinc-400 md:text-base"
                  )}>
                  {item.description}
                </p>
              )) ||
                null}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
