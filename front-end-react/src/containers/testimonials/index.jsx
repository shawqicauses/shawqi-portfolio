import { CursorClickIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { client, urlForImage } from "../../client"
import { classes, variants } from "../../utils/utils"

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const query = ["*", "[_type == 'testimonials']"].join("")
    client
      .fetch(query)
      .then(data => setTestimonials(data))
      .catch(error => console.log(error))
  }, [])

  const colors = [
    "from-green-600 to-teal-300 shadow-lg shadow-teal-500/10",
    "from-cyan-600 to-blue-300 shadow-lg shadow-blue-500/10",
    "from-indigo-600 to-purple-300 shadow-lg shadow-purple-500/10",
    "from-fuchsia-600 to-rose-300 shadow-lg shadow-rose-500/10"
  ]

  return (
    <section
      id="testimonials"
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
            "relative flex h-auto w-full gap-4",
            "snap-x snap-mandatory flex-row lg:gap-6",
            "m-0 cursor-move overflow-x-auto p-0"
          )}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={variants.item}
              className={classes(
                "h-auto w-full shrink-0 snap-start",
                "grid grid-cols-1 items-center justify-center",
                "rounded-xl bg-gradient-to-br p-5 md:p-10",
                "gap-10 lg:grid-cols-3 lg:gap-[3.75rem]",
                colors[index]
              )}>
              <motion.img
                src={urlForImage(item.image)}
                alt={index}
                variants={variants.item}
                className={classes(
                  "aspect-video h-auto w-full rounded-xl",
                  "object-cover object-center grayscale filter",
                  "lg:aspect-square lg:h-max lg:object-top"
                )}
              />
              <div
                className={classes(
                  "relative flex h-auto w-full flex-col",
                  "items-start justify-start gap-4 transition",
                  "lg:col-span-2 lg:h-max lg:w-auto lg:gap-6"
                )}>
                <CursorClickIcon
                  strokeWidth={1}
                  className={classes(
                    "xl-2:h-12 xl-2:w-12 h-10 w-10",
                    "fill-transparent stroke-white/40"
                  )}
                />
                <motion.p
                  variants={variants.item}
                  className={classes(
                    "text-left text-lg font-normal leading-relaxed",
                    "xl:text-xl-2 text-white md:text-xl",
                    "m-0 p-0 not-italic no-underline"
                  )}>
                  Shawqi was one of the most experienced developers I have ever
                  worked with in my entire career. He delivers stunning web
                  design and development products which have helped me so much
                  in my job!
                </motion.p>
                <div>
                  <motion.h4
                    variants={variants.item}
                    className={classes(
                      "text-left text-base font-medium leading-none",
                      "text-white md:text-lg xl:text-xl",
                      "mb-2 not-italic no-underline lg:mb-3"
                    )}>
                    Ahmed Mohammed
                  </motion.h4>
                  <motion.p
                    variants={variants.item}
                    className={classes(
                      "text-left text-xs font-medium leading-none",
                      "text-white/70 md:text-sm xl:text-base",
                      "uppercase not-italic tracking-widest no-underline"
                    )}>
                    Motion Graphic Designer
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
