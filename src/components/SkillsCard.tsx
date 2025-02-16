import "./SkillsCard.css";

import VerifiedIcon from "@mui/icons-material/Verified";

const SkillsCard = () => {
  const skillData = [
    {
      stack: "Desarrollo web",
      skills: "@Frontend",
      profImg:
        "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739482188/client-removebg-preview_1_gudzj0.png",
      skillsDesc: [
        {
          skill: "HTML",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472313/html-5-svgrepo-com_au8mk7.svg",
        },
        {
          skill: "CSS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472313/css-3-svgrepo-com_rc1dvo.svg",
        },
        {
          skill: "Sass",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472313/sass-svgrepo-com_uk70ip.svg",
        },
        {
          skill: "JS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472313/javascript-svgrepo-com_fg6vao.svg",
        },
        {
          skill: "TS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472427/typescript-logo-svgrepo-com_wixla9.svg",
        },
        {
          skill: "React",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472314/react-svgrepo-com_kmtnn2.svg",
        },
      ],
    },
    {
      stack: "Desarrollo web",
      skills: "@Backend",
      profImg:
        "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739482188/server-removebg-preview_w6dwnl.png",
      skillsDesc: [
        {
          skill: "JS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472313/javascript-svgrepo-com_fg6vao.svg",
        },
        {
          skill: "Postgree SQL",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739473741/database-svgrepo-com_v08fk9.svg",
        },
        {
          skill: "NextJS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472313/nextjs-svgrepo-com_oizlyv.svg",
        },

        {
          skill: "TS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472427/typescript-logo-svgrepo-com_wixla9.svg",
        },

        {
          skill: "Firebase",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739473741/firebase-1-logo-svgrepo-com_ozfioy.svg",
        },

        {
          skill: "NodeJS",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739473741/nodejs-svgrepo-com_yotbkb.svg",
        },
      ],
    },
    {
      stack: "Workflows & Herramientas",
      skills: "@Skills",
      profImg:
        "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739484336/engine-removebg-preview_plc3gn.png",
      skillsDesc: [
        {
          skill: "SCRUM",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486579/think-creative-thinking-svgrepo-com_grhlok.svg",
        },
        {
          skill: "BEM",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486578/css-svgrepo-com_noncgw.svg",
        },
        {
          skill: "Jira",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486577/jira-svgrepo-com_wvtu5f.svg",
        },
        {
          skill: "Notion",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486577/notion-logo-svgrepo-com_tpmmmv.svg",
        },
        {
          skill: "PostMan",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486577/postman-icon-svgrepo-com_wmwdim.svg",
        },
        {
          skill: "GIT",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486577/git-svgrepo-com_hvefei.svg",
        },

        {
          skill: "Sequelize",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486577/sequelize-svgrepo-com_yol2g2.svg",
        },

        {
          skill: "Excel",
          src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486577/excel2-svgrepo-com_babzqs.svg",
        },
      ],
    },
  ];
  return (
    <>
      {skillData.map((i, index) => {
        return (
          <div key={index} className="skillsCard__card">
            <div className="skillsCard__header">
              <img src={i.profImg} alt="" />
              <div className="skillsCard__headerText">
                <h4>
                  {i.stack} <VerifiedIcon color="primary" />
                </h4>
                <p>{i.skills}</p>
              </div>
            </div>
            <div className="skillsCard__skills">
              {i.skillsDesc.map((i) => {
                return (
                  <div className="skillsCard__skillsFramework">
                    <img src={i.src} />
                    <p>{i.skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillsCard;
