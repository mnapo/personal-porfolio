import resumeUrl from "../Assets/CV.pdf";

export const UserData = {
  name: "Matías Nápoli",
  about : "I'm a Fullstack developer and Data Science+AI student",
  resumeUrl : resumeUrl,
  FooterLink : "https://www.linkedin.com/in/mnap",
  socialMedia: [
    {
      socialMediaName: "github",
      url: "https://github.com/mnapo",
      icon: "AiFillGithub",
    },
    {
      socialMediaName: "linkedin",
      url: "https://www.linkedin.com/in/mnap",
      icon: "FaLinkedinIn",
    }
  ],
  typewriterOptions: {
    strings: [
      "FullStack Developer",
      "ReactJs Developer",
      "React Native Developer",
      "UI Developer",
      "Javascript Developer",
      "Lua Developer",
      "Data Science Student",
      "IA Development Student",
      "Cryptocurrencies Developer"
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 30,
  },
};