import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export const data =
  {
    about:
      {
        title:
          "About Me",
        description: `Collaborative software developer with 2 years of experience in developing software solutions. 
        Skilled in HTML, CSS, JavaScript, React.JS, MySQL, Node.Js, Python, and C++, with a strong focus on optimizing
         processes and improving efficiency. Collaborates effectively with cross-functional teams to gather requirements
          and deliver high-quality software solutions that meet the needs of the clients.`,
        info: [
          {
            fieldName:
              "Name",
            fieldValue:
              "Saumay Killa",
          },
          {
            fieldName:
              "Phone",
            fieldValue:
              "+1-(516)-968-1066",
          },
          {
            fieldName:
              "Nationality",
            fieldValue:
              "Indian",
          },
          {
            fieldName:
              "Email",
            fieldValue:
              "sk10882@nyu.edu",
          },
          {
            fieldName:
              "LinkedIn",
            fieldValue:
              "https://www.linkedin.com/in/saumaykilla/",
          },
          {
            fieldName:
              "Languages",
            fieldValue:
              "English, Hindi",
          },
        ],
      },
    experience:
      {
        title:
          "My Experience",
        items:
          [
            {
              company:
                "Wiz Freight",
              position:
                "Software Developer 1",
              duration:
                "4TH APRIL 2022 - 1ST AUGUST 2023",
              description:
                [
                  "Collaborated with designers and back-end developers, increasing project completion speed by 15%",
                  "Contributed to documentation, boosting team productivity by 25%",
                  "Integrated two new frontend tools/technologies per quarter",
                  "Achieved a 98% sprint completion rate in Agile development.",
                ],
            },
            {
              company:
                "Highradius",
              position:
                "Software Developer Intern",
              duration:
                "1st August 2021 - 31st March 2022",
              description:
                [
                  "Wrote and tested JavaScript code, reducing website load time by 25%",
                  "Developed clean, maintainable, and scalable code, increasing development efficiency by 30%",
                  "Tested and debugged web applications, resolving 95% of reported issues within 48 hours",
                  "Created responsive design layouts using JavaScript, improving user engagement by 20%",
                ],
            },
          ],
      },
    education:
      {
        fieldName:
          "My Education",
        items:
          [
            {
              university:
                "New York University",
              degree:
                "Master of Science in Management and Systems",
              duration:
                "SEPTEMBER 2023 -  MAY 2025",
              description:
                [
                  `Managing in a Global Economy`,
                  `Strategic Marketing`,
                  `Quantitative Models for Decision-Makers`,
                  `Information Technology & Data Analytics`,
                  `Database Design and Managements`,
                  `Data Mining and Warehousing`,
                ],
            },
            {
              university:
                "SRM Institute of Science and Technology",
              degree:
                "Bachelors of Technology in Computer Science",
              duration:
                "AUGUST 2018 -  JUNE 2022",
              description:
                [
                  `Design and Analysis of Algorithms`,
                  `Data Structures and Algorithms`,
                  `Object Oriented Design and Programming`,
                  `Database Management Systems`,
                  ` Machine Learning`,
                ],
            },
          ],
      },
    skills:
      {
        fieldName:
          "My Skills",
        skillList:
          [
            {
              icon: (
                <SiHtml5 />
              ),
              name: "HTML ",
            },
            {
              icon: (
                <SiCss3 />
              ),
              name: "CSS ",
            },
            {
              icon: (
                <SiTailwindcss />
              ),
              name: "Tailwind CSS ",
            },
            {
              icon: (
                <SiJavascript />
              ),
              name: "JavaScript ",
            },
            {
              icon: (
                <SiTypescript />
              ),
              name: "TypeScript ",
            },
            {
              icon: (
                <SiMysql />
              ),
              name: "MySQL ",
            },
            {
              icon: (
                <SiNodedotjs />
              ),
              name: "Node.js ",
            },
            {
              icon: (
                <SiPython />
              ),
              name: "Python ",
            },
            {
              icon: (
                <SiPostgresql />
              ),
              name: "Postgresql ",
            },
            {
              icon: (
                <SiMongodb />
              ),
              name: "Mongo DB ",
            },
            {
              icon: (
                <SiReact />
              ),
              name: "React",
            },
            {
              icon: (
                <SiNextdotjs />
              ),
              name: "Next.JS",
            },
            {
              icon: (
                <SiExpress />
              ),
              name: "Express",
            },
          ],
      },
  };

export const projects =
  [
    {
      num: 1,
      category:
        "Frontend Project",
      title:
        "To Do List",
      description:
        "Boost  productivity with a sleek Todo List app! It lets you effortlessly create, complete, and delete tasks. Leveraging the cookie storage, the todos stay intact even after a page refresh.",
      stack:
        [
          "Next.js",
          "Jotai",
          "Tailwind CSS",
        ],
      image:
        "/Images/ToDoList.png",
      isPDF:
        false,
      link: "https://to-do-list-saumay.vercel.app/",
    },
    {
      num: 2,
      category:
        "Frontend Project",
      title:
        "Weather App",
      description: `Stay ahead of the weather with this intuitive app! Search for any city and instantly access up-to-date weather information. Powered by the OpenWeatherMap API, the app delivers accurate forecasts. With a seamless searchable dropdown from Headless UI and RapidAPI's city search, finding weather updates has never been easier!`,
      stack:
        [
          "Next.js",
          "Headless UI",
          "Tailwind CSS",
        ],
      image:
        "/Images/Weather.png",
      isPDF:
        false,
      link: "https://weather-app-saumay.vercel.app/",
    },
    {
      num: 3,
      category:
        "Database Designing Project",
      title:
        "Spotify Database Modeling",
      description: `This NYU project aims to enhance Spotify's database management by improving data security and scalability. Key strategies include end-to-end encryption, strict access controls, real-time monitoring, security audits, distributed database architecture, load balancing, and caching mechanisms, ensuring optimal performance and responsiveness as Spotify's user base grows.`,
      stack:
        [
          "Oracle Data Modeler",
          "MySQL",
        ],
      image:
        "/Images/Spotify.png",
      isPDF:
        true,
      link: "/PDF/Spotify-Data-Modeling.pdf",
    },
    {
      num: 4,
      category:
        "Database Designing Project",
      title: `Netflix Database Modeling`,
      description:
        "This group project at NYU aims to enhance Netflix's password protection, reducing unauthorized access and password sharing from 85% to 20% in four months. Strategies include advanced authentication, user control features, and continuous monitoring, supported by a scalable and secure database architecture to improve security and user experience.",
      stack:
        [
          "Oracle Data Modeler",
          "MySQL",
        ],
      image:
        "/Images/Netflix.png",
      isPDF:
        true,
      link: "/PDF/Netflix-Database-Modeling.pdf",
    },
    {
      num: 5,
      category:
        "Data Mining and Warehousing Project",
      title:
        "Amazon Prime Data Warehousing",
      description: `This NYU group project aims to develop an Amazon Prime data warehouse to centralize and analyze customer subscription and video content data. By tracking demographics, subscription plans, renewal dates, and viewing habits, the project seeks to optimize content strategies and enhance client satisfaction through data-driven decision-making.`,
      stack:
        [
          "Oracle Data Modeler",
          "MySQL",
        ],
      image:
        "/Images/Prime.png",
      isPDF:
        true,
      link: "/PDF/Prime.pdf",
    },
  ];
