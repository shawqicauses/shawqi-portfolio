import { motion } from "framer-motion"
import { classes, variants } from "../../utils/utils"
import { Logo } from "../components"

export default function Navbar() {
  const links = ["About", "Work", "Skills", "Blog", "Pricing", "Contact"]

  return (
    <nav
      className={classes(
        "absolute top-0 left-0 z-10 bg-transparent",
        "flex w-full items-center justify-center py-8",
        "border border-transparent text-white"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
        className={classes(
          "xl:max-w-xl-7 container mx-auto px-5",
          "flex flex-row flex-wrap gap-5",
          "items-center justify-between sm:gap-10"
        )}>
        <motion.div variants={variants.item}>
          <Logo />
        </motion.div>
        <motion.ul
          variants={variants.list}
          className={classes(
            "fixed top-0 left-0 z-10 flex h-full w-full",
            "translate-x-full transform flex-col flex-wrap lg:flex-row",
            "items-center justify-center gap-3 bg-white p-5 lg:p-0",
            "lg:relative lg:w-max lg:translate-x-0 lg:bg-transparent"
          )}>
          {links.map(function (item, index) {
            return (
              <motion.li
                variants={variants.item}
                key={["Link".toUpperCase() + item.toLowerCase()].join("-")}
                className={classes(
                  "flex h-auto w-full cursor-pointer",
                  "flex-col flex-wrap lg:h-max lg:w-max",
                  "transform items-center justify-center"
                )}>
                <a
                  href={"#" + item.toLowerCase()}
                  className={classes(
                    "flex w-full flex-col items-center justify-center transition",
                    "text-base font-medium uppercase leading-none tracking-[0.2em]",
                    "rounded-xl border-2 border-zinc-100 p-5 outline-none",
                    "no-underline hover:-translate-y-1 hover:text-orange-300",
                    "text-zinc-400 focus:translate-y-0.5 focus:text-white",
                    "lg:w-max lg:border-0 lg:border-transparent"
                  )}>
                  {item}
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
    </nav>
  )
}
