import { classes } from "../../utils/utils"

export default function Work() {
  const dribble = "https://cdn.dribbble.com/users"
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
              "max-w-md text-left capitalize tracking-tight",
              "xl:text-xl-4 md:text-xl-3 lg:max-w-xl-2 md:max-w-lg",
              "xl:max-w-xl-3 lg:text-center"
            )}>
            I bring things that is{" "}
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
          </h2>
          <p
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-sm text-left tracking-normal text-zinc-500 xl:text-xl",
              "lg:max-w-xl-2 sm:max-w-md md:max-w-xl md:text-lg lg:text-center"
            )}>
            I specialize in designing and building visual websites and web
            applications for your brands and products, no matter their sizes
          </p>
        </div>
        {/* Products */}
        <div
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "md:grid-cols-2 xl:gap-[3.75rem]"
          )}>
          {[
            {
              image:
                "https://cdn.dribbble.com/userupload/3229029/file/original-092f16697365ddeb4ea39b815a966574.png",
              title: "Finance - Landing Page",
              description: [
                "I would love to share with you guys my recent work Finance Website Design.",
                "Hope you guys enjoy and press like if you like it. Got any feedback or comment?",
                "Feel free to leave in the comments below."
              ].join(" ")
            },
            {
              image:
                dribble +
                "/5922214/screenshots/17487426/media/0b3b2886b5f919d0be332155aba4199a.png",
              title: "Banking - Landing Page",
              description: [
                "I would love to share with you guys my recent work Banking Website Design.",
                "Hope you guys enjoy and press like if you like it. Got any feedback or comment?",
                "Feel free to leave in the comments below."
              ].join(" ")
            },
            {
              image:
                dribble +
                "/5922214/screenshots/17378429/media/2258412c8989360788ca43eb4b68f001.png",
              title: "Agency - Header Design",
              description: [
                "I would love to share with you guys my recent work Agency Header Design.",
                "Hope you guys enjoy and press like if you like it. Got any feedback or comment?",
                "Feel free to leave in the comments below."
              ].join(" ")
            },
            {
              image:
                dribble +
                "/5922214/screenshots/17853813/media/e9bc63153e90a221bed7a407274458a9.png",
              title: "Personal - Portfolio Design",
              description: [
                "I would love to share with you guys my recent work Personal Portfolio Website Design.",
                "Hope you guys enjoy and press like if you like it. Got any feedback or comment?",
                "Feel free to leave in the comments below."
              ].join(" ")
            }
          ].map((item, index) => (
            <div
              key={index}
              className={classes(
                "group flex h-auto w-full",
                "flex-col items-start justify-start"
              )}>
              <img
                src={item.image}
                alt={index}
                className={classes(
                  "aspect-[6/4] h-auto w-full object-top",
                  "rounded-xl-2 translate-y-0 transform object-cover",
                  "mb-8 transition duration-150 ease-linear"
                )}
              />
              {(item.title && (
                <h3
                  className={classes(
                    "font-semi-bold text-left text-lg leading-none",
                    "text-left tracking-tight text-zinc-900",
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
                    "text-left text-zinc-500 md:text-base"
                  )}>
                  {item.description}
                </p>
              )) ||
                null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
