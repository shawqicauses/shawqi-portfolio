import { DocumentTextIcon, ExternalLinkIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { images } from "../../constants/constants"
import { classes } from "../../utils/utils"

export default function Header() {
  return (
    <header
      className={classes(
        "relative h-auto w-auto",
        "flex items-center justify-center",
        "xl-2:py-48 py-24 sm:py-32 lg:py-40",
        "mb-12 lg:mb-20 xl:mb-[5.75rem]"
      )}>
      <div
        className={classes(
          "xl-2:max-w-xl-7 container mx-auto h-full px-5",
          "flex flex-col items-start justify-start gap-10",
          "lg:flex-row lg:items-center lg:justify-center"
        )}>
        <div
          className={classes(
            "relative shrink grow basis-0",
            "flex h-auto w-auto flex-col",
            "items-start justify-center gap-0"
          )}>
          <motion.h1
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className={classes(
              "text-xl-3 max-w-lg font-bold leading-tight",
              "mb-4 text-left tracking-tight text-zinc-900 md:mb-8",
              "md:text-xl-4 xl:max-w-xl-2 xl:text-xl-5 md:max-w-xl",
              "translate-y-5 transform opacity-0"
            )}>
            I have great{" "}
            <span
              className={classes(
                "underline underline-offset-4",
                "decoration-amber-500 decoration-4"
              )}>
              experience
            </span>{" "}
            in web design and development 🔸
          </motion.h1>
          <motion.p
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.375 }}
            viewport={{ once: true }}
            className={classes(
              "text-lg font-normal leading-relaxed",
              "max-w-xl-3 mb-8 text-left text-zinc-500",
              "translate-y-5 transform opacity-0",
              "lg:max-w-xl-4 md:mb-14 md:text-xl"
            )}>
            Hi there, Shawqi Hatem is my name. I am a web designer and developer
            who has great experience which has been built during over four years
            of learning and practicing
          </motion.p>
          <motion.div
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className={classes(
              "flex h-auto w-full transform flex-col",
              "items-stretch justify-center gap-3",
              "sm:h-max sm:w-max sm:flex-row sm:gap-4",
              "translate-y-4 opacity-0"
            )}>
            <button
              className={classes(
                "flex cursor-pointer items-center justify-center",
                "gap-3 rounded-lg bg-gradient-to-br from-red-600 to-orange-300",
                "py-5 px-8 text-base font-medium leading-none text-white outline-none",
                "ring-2 ring-transparent ring-offset-4 ring-offset-zinc-50/0 transition-all",
                "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-red-300 md:text-lg",
                "focus:translate-y-0 focus:ring-offset-zinc-50 sm:focus:translate-y-0.5"
              )}>
              <DocumentTextIcon
                strokeWidth={1.5}
                className={classes(
                  "relative h-6 w-6",
                  "fill-transparent stroke-current"
                )}
              />
              <span>Read Articles</span>
            </button>
            <a
              href="https://github.com/shawqicauses"
              target={"blank"}
              className={classes(
                "flex cursor-pointer items-center justify-center",
                "gap-3 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-600",
                "py-5 px-8 text-base font-medium leading-none text-white outline-none",
                "ring-2 ring-transparent ring-offset-4 ring-offset-zinc-50/0 transition-all",
                "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-zinc-300 md:text-lg",
                "focus:translate-y-0 focus:ring-offset-zinc-50 sm:focus:translate-y-0.5"
              )}>
              <ExternalLinkIcon
                strokeWidth={1.5}
                className={classes(
                  "relative h-6 w-6",
                  "fill-transparent stroke-current"
                )}
              />
              <span>My Projects</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.625 }}
          viewport={{ once: true }}
          className={classes(
            "aspect-square max-w-xl flex-1",
            "flex items-center justify-center",
            "translate-y-5 transform opacity-0"
          )}>
          <img
            src={images.file}
            alt="File Illustration"
            className={classes("h-full w-full object-cover")}
          />
        </motion.div>
      </div>
      <div
        className={classes(
          "absolute h-full w-full overflow-hidden",
          "top-0 left-0 bottom-auto right-auto -z-50",
          "bg-zinc-50 transition-all"
        )}>
        <div
          className={classes(
            "absolute flex h-full w-full flex-row",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "items-center justify-center gap-8"
          )}>
          {[...new Array(80)].map(function (item, index) {
            return (
              <div
                key={index}
                className={classes(
                  "relative h-full w-0.5 overflow-hidden",
                  "border border-transparent bg-zinc-100/70"
                )}
              />
            )
          })}
        </div>
        <div
          className={classes(
            "absolute flex h-full w-full flex-col",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "items-center justify-center gap-8"
          )}>
          {[...new Array(80)].map(function (item, index) {
            return (
              <div
                key={index}
                className={classes(
                  "relative h-0.5 w-full overflow-hidden",
                  "border border-transparent bg-zinc-100/70"
                )}
              />
            )
          })}
        </div>
      </div>
    </header>
  )
}
