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
  SiAwsamplify,
  SiDocker,
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
              "saumaykilla@gmail.com",
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
              "English",
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
              company : "Humainority : Non Profit",
              position: "Founding Engineer",
              duration:"September 1st 2024 - May 15th 2025",
              desctiption:[
                "Spearheaded frontend development using Next.js, resulting in a 60% reduction in user application time.",
                "Implemented CI/CD pipelines with AWS Lambda, reducing deployment time by 40% and enabling faster iterations.",
                "Integrated OpenAI’s API to auto-generate tailored resumes and cover letters, tripling user engagement in testing.",
              ],
            },
            {
              company:
                "Wiz Freight",
              position:
                "Software Developer 1",
              duration:
                "April 4th APRIL 2022 - August 1st 2023",
              description:
                [
                  "Developed responsive UIs in React, reducing front-end development time by 30%.",
                  "Integrated backend APIs to deliver real-time freight tracking and live dashboards, significantly improving the user experience.",
                  "Improved performance and accessibility across key pages, boosting Lighthouse scores by 20%.",
                ],
            },
            {
              company:
                "Highradius",
              position:
                "Software Developer Intern",
              duration:
                " August 1st 2021 - March 31st 2022",
              description:
                [
                  "Trained machine learning models to predict invoice clearance dates more accurately, helping finance teams forecast payments up to 25% better.",
                  "Automated client-specific file creation with Excel scripts, cutting down manual processing by around 40%",
                  "Explored key data features that influenced payment behaviour, which sped up the model training process by nearly 15%.",
                  "Worked closely with data engineers to streamline pipeline performance, bringing model run times down from hours to under 30 minutes.",
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
            {
              icon:(
                <SiAwsamplify />
                ),
              name: "AWS Amplify",
            },
            {
              icon:(
                <SiDocker />
                ),
              name: "DockerFile",
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
