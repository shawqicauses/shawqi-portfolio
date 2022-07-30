import { motion } from "framer-motion"
import { classes } from "../../utils/utils"
import { Logo } from "../components"

export default function Navbar() {
  const links = ["Home", "About", "Work", "Skills", "Contact"]

  return (
    <nav
      className={classes(
        "absolute top-0 left-0 z-10 py-8",
        "flex w-full items-center justify-center",
        "bg-transparent text-zinc-900"
      )}>
      <div
        className={classes(
          "xl:max-w-xl-7 container mx-auto px-5",
          "flex flex-row flex-wrap gap-5",
          "items-center justify-between sm:gap-10"
        )}>
        <motion.div
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className={classes("translate-y-5 transform opacity-0")}>
          <Logo />
        </motion.div>
        <ul
          className={classes(
            "fixed top-0 left-0 z-10 flex h-full w-full",
            "translate-x-full transform flex-col flex-wrap lg:flex-row",
            "items-center justify-center gap-3 bg-white p-5 lg:p-0",
            "lg:relative lg:w-max lg:translate-x-0 lg:bg-transparent"
          )}>
          {links.map(function (item, index) {
            return (
              <motion.li
                key={["Link".toUpperCase() + item.toLowerCase()].join("-")}
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.25 + 0.125 * index }}
                viewport={{ once: true }}
                className={classes(
                  "flex h-auto w-full cursor-pointer",
                  "flex-col flex-wrap lg:h-max lg:w-max",
                  "transform items-center justify-center",
                  "translate-y-5 opacity-0"
                )}>
                <a
                  href={"#" + item.toLowerCase()}
                  className={classes(
                    "flex w-full flex-col items-center justify-center transition",
                    "text-base font-medium uppercase leading-none tracking-[0.2em]",
                    "rounded-lg border-2 border-zinc-100 p-5 outline-none",
                    "no-underline hover:-translate-y-1 hover:text-orange-500",
                    "text-zinc-500 focus:translate-y-0.5 focus:text-zinc-800",
                    "lg:w-max lg:border-0 lg:border-transparent"
                  )}>
                  {item}
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
