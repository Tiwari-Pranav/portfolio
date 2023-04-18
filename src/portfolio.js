/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pranav Tiwari",
  title: "Hi all, I'm Pranav",
  subTitle: emoji(
    "Full Stack Software Wizard 🚀: Crafting Web and Machine Learning Applications with JavaScript, ReactJS, NodeJS, React Native, TensorFlow, and Beyond!🌐📱🧠🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fPM0IDv-deZiTXs3XdRPBqPZbeGYxhfm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Tiwari-Pranav",
  linkedin: "https://www.linkedin.com/in/sirpranavtiwari/",
  gmail: "pranavtiwari548@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  twitter: "https://twitter.com/SirPranavTiwari",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER & A MACHINE LEARNING ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Programming Language I am comfortable in : Java, C, C++, Python"
    ),
    emoji("⚡ Machine Learning Technologies: Python, Tensorflow"),
    emoji(
      "⚡ Frameworks/Libraries & Tools: •HTML •CSS •JavaScript •Flask •REACT •JSP •Servlet •Node-Js"
    ),
    emoji(
      "⚡ Database Management System: MySql"
    ),
    emoji("⚡ Content Management System: Drupal-9"),
    emoji(
      "⚡ Version Control: Github"
    ),
    emoji(
      "⚡ CI/CD: Github Actions"
      ),
      emoji("⚡ Documentation Languages: LaTeX"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-brands fa-drupal"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pranav Tiwari",
      logo: require("./assets/images/iiitt.png"),
      subHeader: "B. Tech. in Computer Science",
      duration: "December 2020 - April 2023",
      desc: "CGPA: 9.4",
      descBullets: [
        "I mentain the highest CGPA in my batch",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "City Montessori School",
      logo: require("./assets/images/cms.jpg"),
      subHeader: "Intermediate (I.S.C.)",
      duration: "Score: 96.25%",
      desc: "Ranked topper throughout years of Intermediate in all examinations.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "City Montessori School",
      logo: require("./assets/images/cms.jpg"),
      subHeader: "High School (ICSE)",
      duration: "Score: 93%",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming <Java, C, C++>",
      progressPercentage: "60%"
    },
    {
      Stack: "Machine Learning Technologies <Python, Tensorflow>", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Frameworks", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Frameworks",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "LateRAISSE | LREC'22 ",
      company: "ELRA",
      companylogo: require("./assets/images/elra.jpg"),
      date: "Dec 2021 – April 2022 | Conference Paper",
      desc: "Work shop was a full day event held on June 25,2022 in Marseille, France at Le Palais du Pharo",
      descBullets: [
        "Presented my study on the region specific bias in monolingual word embeddings of various Indian languages",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: " Summer Fellowship ’22 | BSSE ",
      company: "The Indian Institute of Science (IISc)",
      companylogo: require("./assets/images/iisc.jpg"),
      date: "May 2022 – June 2022",
      desc: "A project in The Centre for BioSystems Science and Engineering (BSSE) under Dr. Mohit Kumar Jolly.",
      descBullets: [
        "Worked with RACIPE: a computational tool for modeling gene regulatory circuits using randomization",
        "Focus of the work was to use machine learning and deep learning to study Gene Regulatory Networks."
      ]
    },
    {
      role: "Summer Intern ’22",
      company: "NIT Trichy",
      companylogo: require("./assets/images/nitt.png"),
      date: "July 2022 – September 2022",
      desc: "A project in Artificial Intelligence Lab, Dept. of Computer Application, under Dr. U Srinivasulu Reddy.",
      descBullets: [
        "Focus of the work was to use machine learning and deep learning to enhance the growth of Urban Agriculture System.",
        "Worked on two paper which are currently in review."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/basic-layout-demo.gif"),
      projectName: "The Art Palace",
      projectDesc: "The Art Palace is a Mutli National Coorperation that deals in Traditional Art such as painting, sceneries as well Digital Art such as visual graphics, 2D/3D animation, animated gif etc. TAP also provide to a discussion platform through its form sucso that young minds can get experienced artists.",
      footerLink: [
        {
          name: "Visit Source",
          url: "https://github.com/Tiwari-Pranav/fsf_2022_task3"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/index.png"),
      projectName: "Unity-Hospital-Managment-System",
      projectDesc: "A Hospital Management System is an integrated information system for managing all aspects of a hospital's appointment operations",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Tiwari-Pranav/Unity-Hospital-Managment-System--Source-Code"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Introduction to the Biology",
      subtitle:
        "John Hopkins University",
      image: require("./assets/images/johnn.png"),
      imageAlt: "John Hopkins University",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/538CGDQWGBS8"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle:
        "Stanford",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/GQRV9WQ6U9H6"
        }
      ]
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle:
        "Stanford",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/BU89URKYMDFG"
        }
      ]
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Stanford",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/JERZSTMB2JG3"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "AI and ML Demystified: A Comprehensive Introduction",
      subtitle: "IIIT Tiruchirappalli December-2022",
      slides_url: "https://drive.google.com/file/d/1DkU_-PtFeV696pvX9E3hXodC7b1yOuB7/view?usp=sharing",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Check yourself before you wreck yourself: Vertical Farming",
      subtitle: "IIIT Tiruchirappalli February-2022",
      slides_url: "https://drive.google.com/file/d/1bNbCz1wBoQeaicPyqo1OwUKy61DvOsmq/view?usp=sharing",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9621190362",
  email_address: "pranavtiwari548@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SirPranavTiwari", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
