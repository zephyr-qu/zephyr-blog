type Social = {
  label: string
  link: string
}

type Presentation = {
  mail: string
  title: string
  description: string
  socials: Social[]
  profile?: string
}

const presentation: Presentation = {
  mail: "zephyr.qu.dev@gmail.com",
  title: "Hi, I’m Zephyr 👋",
  profile: "/profile.svg",
  description:
    "Hello! I'm a *Chinese full-stack developer* with over *one year* of development experience. I work with *Java and TypeScript*. Currently, I'm studying *Flutter* and exploring *Vibe Coding*.",
  socials: [
    {
      label: "X",
      link: "https://x.com/zephyr_qu",
    },
    // {
    //   label: "Bento",
    //   link: "https://bento.me/m-wolff",
    // },
    {
      label: "Github",
      link: "https://github.com/zephyr-qu",
    },
  ],
}

export default presentation
