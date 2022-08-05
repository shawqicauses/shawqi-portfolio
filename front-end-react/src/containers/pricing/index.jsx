import { ChevronRightIcon } from "@heroicons/react/outline"
import { classes } from "../../utils/utils"

export default function Pricing() {
  const data = [
    {
      featured: false,
      title: "Essential website",
      description: [
        "This plan is the perfect solution for your professional business mindset",
        "if you already have a startup consists of digital ideas or projects, so hurry up!"
      ].join(" "),
      price: 150,
      features: [
        "Website consists of one pages",
        "High support of Accessibility",
        "High optimization check of SEO"
      ]
    },
    {
      featured: true,
      title: "Professional website",
      description: [
        "This plan is the perfect solution for your professional business mindset",
        "if you already have a startup consists of digital ideas or projects, so hurry up!"
      ].join(" "),
      price: 350,
      features: [
        "Website consists of three pages",
        "High support of Accessibility",
        "High optimization check of SEO",
        "Access to website's repository",
        "Access to website's design file"
      ]
    }
  ]

  return (
    <section
      id="pricing"
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
              "max-w-xl-2 text-left capitalize tracking-tight lg:text-center",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 xl:max-w-xl-3"
            )}>
            Pick up the{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              package
            </span>{" "}
            you prefer depending on your company{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              project's
            </span>{" "}
            details
          </h2>
          <p
            className={classes(
              "text-base font-normal leading-normal",
              "max-w-xl-2 text-left tracking-normal text-zinc-400",
              "md:text-lg lg:text-center xl:text-xl"
            )}>
            Every digital idea or project always starts as a website that is
            able to fetch potential people and re-define them as clients
          </p>
        </div>
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1",
            "rounded-xl bg-zinc-800/20 lg:grid-cols-2",
            "content-start items-start justify-start gap-5",
            "p-5 md:gap-10 md:p-10 xl:gap-[3.75rem] xl:p-[3.75rem]"
          )}>
          {data.map((item, index) => (
            <div
              key={index}
              className={classes(
                "flex w-full flex-col gap-8 rounded-xl p-5 md:gap-10",
                "xl-2:p-10 items-start justify-start xl:p-[1.875rem]",
                item.featured
                  ? [
                      "bg-gradient-to-br from-red-600 to-orange-300",
                      "shadow-md shadow-orange-300/10"
                    ].join(" ")
                  : "bg-transparent"
              )}>
              <p
                className={classes(
                  "flex h-auto w-full flex-row",
                  "items-start justify-start gap-2"
                )}>
                <span
                  className={classes(
                    "text-xl-3 font-normal leading-none",
                    "uppercase not-italic no-underline",
                    item.featured ? "text-red-300" : "text-zinc-400"
                  )}>
                  $
                </span>
                <span
                  className={classes(
                    "text-xl-6 font-semi-bold leading-none",
                    "mt-2 not-italic tracking-tight no-underline"
                  )}>
                  {item.price}
                </span>
              </p>
              <div
                className={classes(
                  "flex h-auto w-full flex-col",
                  "items-start justify-start gap-4 md:gap-5"
                )}>
                <h3
                  className={classes(
                    "font-semi-bold text-xl leading-none",
                    "text-left tracking-tight text-white",
                    "md:text-xl-2 mt-auto max-w-xs capitalize"
                  )}>
                  {item.title}
                </h3>
                <p
                  className={classes(
                    "text-base font-normal leading-relaxed",
                    "text-left normal-case md:text-lg",
                    item.featured ? "text-orange-100" : "text-zinc-400"
                  )}>
                  {item.description}
                </p>
              </div>
              <button
                className={classes(
                  "flex w-full cursor-pointer items-center justify-center",
                  "gap-3 py-5 px-8 text-base font-medium leading-none outline-none",
                  "ring-2 ring-transparent ring-offset-4 ring-offset-zinc-50/0 transition-all",
                  "rounded-xl hover:-translate-y-1 focus:translate-y-0.5 md:text-lg",
                  "bg-gradient-to-br focus:translate-y-0 sm:focus:translate-y-0.5",
                  item.featured
                    ? [
                        "from-white to-zinc-100 text-zinc-900",
                        "focus:ring-orange-600 focus:ring-offset-orange-300"
                      ].join(" ")
                    : [
                        "from-zinc-800/60 to-zinc-700/60 text-white",
                        "focus:ring-zinc-800 focus:ring-offset-zinc-900"
                      ].join(" ")
                )}>
                Get Started
              </button>
              <ul
                className={classes(
                  "flex h-auto w-full flex-col gap-0",
                  "items-start justify-start divide-y",
                  item.featured ? "divide-orange-100/20" : "divide-zinc-600/20"
                )}>
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className={classes(
                      "w-full text-sm font-normal leading-normal",
                      "gap-3 py-3 text-left md:gap-4 md:py-4 md:text-base",
                      "flex flex-row items-center justify-start",
                      item.featured ? "text-orange-100" : "text-zinc-400"
                    )}>
                    <ChevronRightIcon
                      strokeWidth={2}
                      className={classes(
                        "relative h-4 w-4",
                        "fill-transparent stroke-current"
                      )}
                    />
                    {feature}
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
