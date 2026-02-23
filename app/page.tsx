import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <Terminal />

      {/* Server-rendered content for search engine crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h1>Dan Edwards - Senior Software Engineer</h1>
        <p>
          Web &amp; Mobile Developer with over 9 years of experience
          specializing in React Native, TypeScript, and AI. Currently a Senior
          Software Engineer at Infinite Red, building design systems, component
          libraries, and mobile apps for Fortune 5 companies.
        </p>

        <h2>About</h2>
        <p>
          Seasoned Web &amp; Mobile Developer with a passion for crafting
          engaging and performant applications. At Infinite Red, I focus on
          leveraging the power of React Native, TypeScript, and AI to deliver
          exceptional user experiences. With over 9 years of software
          development experience, I&apos;ve worked on projects ranging from
          financial applications to mobile apps for Fortune 5 companies.
        </p>

        <h2>Skills</h2>
        <h3>Frontend</h3>
        <p>
          React.js, React Native, Expo, Next.js, TypeScript, GraphQL, Apollo,
          Node.js, Tailwind CSS, Shadcn UI
        </p>
        <h3>State Management</h3>
        <p>Redux, MST, Zustand, React Context</p>
        <h3>Testing</h3>
        <p>
          Jest, React Testing Library, Cypress, Playwright, Detox, Maestro,
          Storybook
        </p>
        <h3>DevOps &amp; Scaling</h3>
        <p>
          EAS, GitHub Actions, Jenkins, GitLab CI, Docker, Kubernetes, AWS,
          Monorepos
        </p>

        <h2>Projects</h2>
        <h3>Terminal Portfolio Website</h3>
        <p>
          A unique portfolio website that simulates a terminal interface,
          allowing visitors to navigate through different sections using terminal
          commands. Built with Next.js, TypeScript, React, and Tailwind CSS.
        </p>
        <h3>Psychosocial</h3>
        <p>
          A parody social media platform inspired by Twitter with a
          metal-inspired interface. Built with React, Node.js, Express, and
          MongoDB.
        </p>
        <h3>Animation Practice</h3>
        <p>
          React Native animation experiments using the Animation API with
          TypeScript and Expo.
        </p>
        <h3>Codeword</h3>
        <p>
          A multiplayer word game built with React Native, Expo, Supabase,
          Zustand, and Expo Router.
        </p>

        <h2>Experience</h2>
        <h3>Infinite Red - Senior Software Engineer (2022-Present)</h3>
        <p>
          Building design systems and component libraries for Fortune 5 app
          teams. Developing SSO and third-party sign-in features for financial
          apps. Contributing to open-source projects including Ignite and
          react-native-mlkit.
        </p>
        <h3>Wise Technologies - Software Engineer (2020-2022)</h3>
        <p>
          Delivered features and bug fixes. Converted 70% of Rescript codebase
          to TypeScript. Participated in design sprints.
        </p>
        <h3>Orange Bees - Software Engineer (2019-2020)</h3>
        <p>
          Developed full-stack web applications using Angular2+ and NestJS.
          Improved deployment with containerization.
        </p>
        <h3>NewSpring Church - Junior Web Developer (2018-2019)</h3>
        <p>
          Developed mobile app with React Native and Apollo GraphQL. Led
          decommissioning of legacy apps. Database migration from MySQL to
          MSSQL.
        </p>

        <h2>Education</h2>
        <p>
          B.S. Finance from Anderson University. Front End Web Development from
          The Iron Yard.
        </p>

        <h2>Contact</h2>
        <p>
          Email: cdaniel.edwards@gmail.com. GitHub: cdanwards. LinkedIn:
          cdanwards. BlueSky: @cdanwards.bsky.social.
        </p>
      </div>
    </main>
  );
}
