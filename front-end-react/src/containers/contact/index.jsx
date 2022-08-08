import { classes } from "../../utils/utils"

export default function Contact() {
  const inputs = [
    {
      type: "text",
      id: "user-name",
      name: "user-name",
      label: "Your Name"
    },
    {
      type: "email",
      id: "user-email",
      name: "user-email",
      label: "Your E-mail"
    },
    {
      type: "text",
      id: "user-job",
      name: "user-job",
      label: "Your Job"
    },
    {
      type: "number",
      id: "user-budget",
      name: "user-budget",
      label: "Your Budget"
    },
    {
      type: "textarea",
      id: "user-message",
      name: "user-message",
      label: "Your Message"
    }
  ]

  return (
    <section
      id="contact"
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
            We love to hear{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              feedback
            </span>{" "}
            from your side. So, let us get in touch using this{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-orange-300",
                "bg-clip-text text-transparent no-underline"
              )}>
              form
            </span>
          </h2>
          <p
            className={classes(
              "text-base font-normal leading-normal",
              "max-w-xl-2 text-left tracking-normal text-zinc-400",
              "md:text-lg lg:text-center xl:text-xl"
            )}>
            On this humble website, hearing from users like you is an essential
            thing to do. So, don't think a lot and send honest feedback
          </p>
        </div>
        <form
          className={classes(
            "max-w-xl-4 grid h-full w-full grid-cols-1",
            "items-start justify-start gap-3 lg:gap-4",
            "lg:grid-cols-2 lg:items-start lg:justify-start"
          )}>
          {inputs.map(({ type, id, name, label }) => (
            <div
              className={classes(
                "flex h-auto w-full flex-col gap-3",
                "items-start justify-start lg:gap-4",
                type === "textarea" ? "col-span-full" : ""
              )}>
              <label
                htmlFor={id}
                className={classes(
                  "w-auto text-lg font-medium leading-none",
                  "text-left tracking-tight text-white",
                  "no-underling sr-only not-italic lg:text-xl"
                )}>
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={name}
                  placeholder={label}
                  className={classes(
                    "resize-none text-base font-normal leading-normal text-zinc-100 lg:text-lg",
                    "rounded-lg border-2 border-zinc-800 bg-zinc-800/40",
                    "h-72 w-full p-4 transition duration-100 ease-linear",
                    "placeholder:opacity-1 outline-none placeholder:text-zinc-500",
                    "focus:border-2 focus:border-orange-300 focus:outline-none focus:ring-0",
                    "focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
                  )}
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={name}
                  placeholder={label}
                  className={classes(
                    "text-base font-normal leading-normal text-zinc-100 lg:text-lg",
                    "rounded-lg border-2 border-zinc-800 bg-zinc-800/40",
                    "h-full w-full p-4 transition duration-100 ease-linear",
                    "placeholder:opacity-1 outline-none placeholder:text-zinc-500",
                    "focus:border-2 focus:border-orange-300 focus:outline-none focus:ring-0",
                    "focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
                  )}
                />
              )}
            </div>
          ))}
          <button
            className={classes(
              "col-span-full flex w-full cursor-pointer items-center justify-center",
              "gap-3 rounded-xl bg-gradient-to-br from-red-600 to-orange-300",
              "py-5 px-8 text-base font-medium leading-none text-white outline-none",
              "ring-2 ring-transparent ring-offset-4 ring-offset-zinc-50/0 transition-all",
              "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-orange-600 md:text-lg",
              "focus:translate-y-0 focus:ring-offset-zinc-900 sm:focus:translate-y-0.5"
            )}>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
