import images from "../../constants/images"
import { classes } from "../../utils/utils"

export default function About() {
  const data = [
    {
      image: images.figma,
      title: "Figma Design Tool",
      description: [
        "I use Figma application for years now and I am so grateful that",
        "I have this tool because it makes your design process easier!"
      ].join(" ")
    },
    {
      image: images.brush,
      title: "Web Design",
      description: [
        "Web design is so freaking interesting due to its challenges!",
        "With some design basics and helpful tools you are going to rock"
      ].join(" ")
    },
    {
      image: images.computer,
      title: "Web Development",
      description: [
        "This is my powerful spot which I also have experienced the most",
        "Techniques come and go but the solid foundation I have does not!"
      ].join(" ")
    }
  ]

  return (
    <section
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
              "max-w-xs text-left capitalize tracking-tight",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 md:max-w-lg",
              "xl:max-w-xl-3 lg:text-center"
            )}>
            I clearly know that good{" "}
            <span
              className={classes(
                "underline underline-offset-2",
                "decoration-orange-300 decoration-2"
              )}>
              development
            </span>{" "}
            means good{" "}
            <span
              className={classes(
                "underline underline-offset-2",
                "decoration-orange-300 decoration-2"
              )}>
              business
            </span>{" "}
            for you!
          </h2>
          <p
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-sm text-left tracking-normal text-zinc-500 xl:text-xl",
              "lg:max-w-xl-2 sm:max-w-md md:max-w-xl md:text-lg lg:text-center"
            )}>
            Trust me, this section is not a promotion for me as a professional,
            it is just what I really know and have a lot experience in
          </p>
        </div>
        <div
          className={classes(
            "grid grid-cols-1 gap-10",
            "md:grid-cols-2 lg:grid-cols-3",
            "lg:gap-[3.75rem] xl:gap-20"
          )}>
          {data.map((item, index) => (
            <div
              key={index}
              className={classes("flex flex-col items-start justify-start")}>
              <div
                className={classes(
                  "relative flex flex-row items-center justify-center",
                  "rounded-xl-2 aspect-video w-full bg-zinc-100",
                  "mb-6 ring-2 ring-zinc-50 ring-offset-8 lg:mb-8"
                )}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={classes(
                    "absolute top-1/2 left-1/2 bottom-auto right-auto",
                    "w-1/2 -translate-x-1/2 -translate-y-1/2",
                    "aspect-auto transform object-cover object-center"
                  )}
                />
              </div>
              <span
                className={classes(
                  "font-monospace text-base font-medium leading-none",
                  "mb-4 text-zinc-400 md:text-lg lg:mb-6"
                )}>
                {index + 1 >= 10 ? index : "0" + (index + 1)}
              </span>
              <h3
                className={classes(
                  "font-semi-bold text-left text-lg leading-none",
                  "max-w-xs text-left tracking-tight text-zinc-900",
                  "mb-4 mt-auto md:text-xl lg:mb-6"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
