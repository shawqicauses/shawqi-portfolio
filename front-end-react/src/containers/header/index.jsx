import { DocumentTextIcon, ExternalLinkIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { images } from "../../constants/constants"
import { classes } from "../../utils/utils"

export default function Header() {
  const variants = {
    container: {
      hidden: {
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.125,
          staggerDirection: -1
        }
      },
      visible: {
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.125,
          staggerDirection: 1
        }
      }
    },
    introduction: {
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
    <header
      id="header"
      className={classes(
        "relative mb-12 flex h-auto w-auto flex-row border-b-2 py-24",
        "items-center justify-center border-transparent border-b-zinc-800/10",
        "xl-2:py-48 sm:py-32 lg:mb-20 lg:py-40 xl:mb-[5.75rem]"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
        className={classes(
          "xl-2:max-w-xl-7 container mx-auto h-full px-5",
          "flex flex-col items-start justify-start gap-10",
          "lg:flex-row lg:items-center lg:justify-center"
        )}>
        <motion.div
          variants={variants.introduction}
          className={classes(
            "relative shrink grow basis-0",
            "flex h-auto w-auto flex-col",
            "items-start justify-center gap-0"
          )}>
          <motion.h1
            variants={variants.item}
            className={classes(
              "text-xl-3 max-w-lg font-bold leading-tight",
              "mb-4 text-left tracking-tight text-white md:mb-8",
              "md:text-xl-4 xl:max-w-xl-2 xl:text-xl-5 md:max-w-xl"
            )}>
            I have great{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              experience
            </span>{" "}
            in web design and development 🔸
          </motion.h1>
          <motion.p
            variants={variants.item}
            className={classes(
              "text-lg font-normal leading-relaxed",
              "max-w-xl-3 mb-8 text-left text-zinc-400",
              "lg:max-w-xl-4 md:mb-14 md:text-xl"
            )}>
            Hi there, Shawqi Hatem is my name. I am a web designer and developer
            who has great experience which has been built during over four years
            of learning and practicing
          </motion.p>
          <motion.div
            variants={variants.item}
            className={classes(
              "flex h-auto w-full flex-col",
              "items-stretch justify-center gap-3",
              "sm:h-max sm:w-max sm:flex-row sm:gap-4"
            )}>
            <button
              className={classes(
                "flex cursor-pointer items-center justify-center",
                "gap-3 rounded-xl bg-gradient-to-br from-red-600 to-orange-300",
                "py-5 px-8 text-base font-medium leading-none text-white outline-none",
                "ring-2 ring-transparent ring-offset-4 ring-offset-zinc-50/0 transition-all",
                "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-orange-600 md:text-lg",
                "focus:translate-y-0 focus:ring-offset-zinc-900 sm:focus:translate-y-0.5"
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
                "gap-3 rounded-xl bg-gradient-to-br from-zinc-800/20 to-zinc-700/20",
                "py-5 px-8 text-base font-medium leading-none text-white outline-none",
                "ring-2 ring-transparent ring-offset-4 ring-offset-zinc-50/0 transition-all",
                "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-zinc-800 md:text-lg",
                "focus:translate-y-0 focus:ring-offset-zinc-900 sm:focus:translate-y-0.5"
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
        </motion.div>
        <motion.div
          variants={variants.item}
          className={classes(
            "aspect-square max-w-xl flex-1",
            "flex items-center justify-center",
            "self-center lg:self-start"
          )}>
          <img
            src={images.file}
            alt="File Illustration"
            className={classes("h-full w-full object-cover")}
          />
        </motion.div>
      </motion.div>
      <div
        className={classes(
          "absolute h-full w-full overflow-hidden",
          "top-0 left-0 bottom-auto right-auto -z-50",
          "bg-zinc-900 transition-all"
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
                  "border border-transparent bg-zinc-800/10"
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
                  "border border-transparent bg-zinc-800/10"
                )}
              />
            )
          })}
        </div>
      </div>
    </header>
  )
}
