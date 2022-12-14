// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const portfolio = [
    {
      name: "HurryBuy Dashboard",
      desc: "A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.",
      img: "/images/portfolio/hurrybuy_dashboard_cover.png",
      url: "/portfolio/hurrybuy-dashboard",
      tags: [
        "JavaScript",
        "HTML",
        "CSS/SASS",
        "React",
      ],
    },
    {
      name: "React Todolist",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/images/portfolio/react_todolist_cover.png",
      url: "/portfolio/hurrybuy-dashboard",
      tags: [
        "JavaScript",
        "HTML",
        "CSS/SASS",
        "React",
      ],
    },
    {
      name: "React calculator",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/images/portfolio/react_calculator_cover.png",
      url: "/portfolio/hurrybuy-dashboard",
      tags: [
        "JavaScript",
        "HTML",
        "CSS/SASS",
        "React",
      ],
    },
  ];
  res.status(200).json(portfolio)
}
