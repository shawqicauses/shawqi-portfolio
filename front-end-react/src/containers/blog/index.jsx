import { useEffect, useState } from "react"
import { client, urlForImage } from "../../client"
import { classes } from "../../utils/utils"

export default function Blog() {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const query = ["*", "[_type == 'blog']"].join("")
    client
      .fetch(query)
      .then(data => setBlog(data))
      .catch(error => console.log(error))
  }, [])

  console.log(blog)

  return (
    <section
      id="about"
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
              "max-w-md text-left capitalize tracking-tight",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 md:max-w-lg",
              "xl:max-w-xl-3 lg:text-center"
            )}>
            I make the web development area a{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              better
            </span>{" "}
            place by writing{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              articles
            </span>{" "}
            with passion
          </h2>
          <p
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-sm text-left tracking-normal text-zinc-400 xl:text-xl",
              "lg:max-w-xl-2 sm:max-w-md md:max-w-xl md:text-lg lg:text-center"
            )}>
            I love writing articles around the web design and development topic
            to improve my skills and collaborating with others
          </p>
        </div>
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "xl-2:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-[3.75rem]"
          )}>
          {blog.map((item, index) => (
            <div
              key={index}
              className={classes(
                "group flex h-auto w-full",
                "flex-col items-start justify-start"
              )}>
              <img
                src={urlForImage(item.image)}
                alt={item.title}
                className={classes(
                  "mb-8 aspect-video h-auto w-full object-center",
                  "translate-y-0 transform object-cover group-hover:scale-105",
                  "rounded-xl-2 transition duration-150 ease-linear lg:mb-10"
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
                  "font-semi-bold text-lg leading-normal",
                  "text-left tracking-tight text-white",
                  "mb-4 mt-auto max-w-xs md:text-xl lg:mb-6"
                )}>
                {item.title}
              </h3>
              <p
                className={classes(
                  "text-sm font-normal leading-relaxed",
                  "text-left text-zinc-400 md:text-base"
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
