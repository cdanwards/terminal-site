import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-section">
        <h2>Experience</h2>

        <div className="resume-subsection">
          <h3>Infinite Red, Inc., Greenville</h3>
          <h4>Senior Software Engineer</h4>
          <p>July 2022 – Present</p>
          <ul>
            <li>
              Client 1: Built a comprehensive design system and component
              library, significantly enhancing development efficiency for a
              Fortune 5 app team. Supported the transition from native apps to
              React Native, improving internal documentation and conducting
              behavior and pattern analysis.
            </li>
            <li>
              Client 2: Developed new SSO methods and third-party sign-in
              features, increasing user login efficiency and engagement for a
              large financial documentation app. Enhanced native integration and
              introduced new features, resulting in improved user satisfaction.
            </li>
            <li>
              Internal Contributions: Created the Ignite Cookbook site to
              increase community engagement and promote Infinite Red as a
              leading React Native expert agency. Contributed to open-source
              projects such as Ignite and react-native-mlkit, staying current
              with AI trends and enhancing project capabilities.
            </li>
          </ul>
        </div>

        <div className="resume-subsection">
          <h3>Wise Technologies, Greenville</h3>
          <h4>Software Engineer</h4>
          <p>September 2020 – August 2022</p>
          <ul>
            <li>
              Iterated and delivered new features and bug fixes, reducing
              bug-related user complaints and improving product stability.
            </li>
            <li>
              Converted 70% of the Rescript codebase to TypeScript, enhancing
              code maintainability and developer productivity.
            </li>
            <li>
              Participated in design sprints, contributing to the successful
              implementation of large features and improving team collaboration.
            </li>
          </ul>
        </div>

        <div className="resume-subsection">
          <h3>Orange Bees, Greenville</h3>
          <h4>Software Engineer</h4>
          <p>October 2019 – September 2020</p>
          <ul>
            <li>
              Developed a full-stack web application using Angular2+ and NestJS,
              collaborating closely with client designers and test teams to
              ensure the product met their needs.
            </li>
            <li>
              Improved deployment processes by integrating containerization
              technologies and expanding the use of strongly typed languages
              like TypeScript, enhancing application performance and
              maintainability.
            </li>
          </ul>
        </div>

        <div className="resume-subsection">
          <h3>NewSpring Church, Anderson</h3>
          <h4>Junior Web Developer</h4>
          <p>January 2018 – October 2019</p>
          <ul>
            <li>
              Developed a mobile app using React Native and Apollo GraphQL,
              improving the app&apos;s performance and user experience.
            </li>
            <li>
              Supported legacy projects and led the decommissioning of 3
              outdated apps, streamlining the application portfolio.
            </li>
            <li>
              Assisted in migrating the content database from MySQL to MSSQL for
              a new website launch, ensuring data integrity and improving
              performance.
            </li>
            <li>
              Actively participated in design sprints, contributing to the
              development of innovative features and improving team
              collaboration.
            </li>
          </ul>
        </div>

        <div className="resume-subsection">
          <h3>Edward Jones, Greenville</h3>
          <h4>Financial Advisor</h4>
          <p>November 2016 – September 2017</p>
          <ul>
            <li>
              Built and maintained client relationships, creating tailored
              investment portfolios that aligned with their financial goals,
              leading to increased client satisfaction and retention.
            </li>
          </ul>
        </div>

        <div className="resume-subsection">
          <h3>Resurgent Capital Services, Greenville</h3>
          <h4>Data Analyst</h4>
          <p>September 2015 – May 2016</p>
          <ul>
            <li>
              Analyzed credit data for over 80,000,000 client accounts,
              providing insights that informed strategic decision-making.
            </li>
            <li>
              Created and submitted monthly data reports to Experian, Equifax,
              and TransUnion, ensuring accuracy and compliance.
            </li>
            <li>
              Conducted data inquiries to identify trends and critical findings,
              making actionable recommendations to key decision-makers.
            </li>
            <li>
              Completed monthly audits of records, ensuring data integrity and
              accuracy.
            </li>
            <li>
              Compiled comprehensive reports using Excel, SQL, and Report
              Builder, effectively communicating findings to the executive vice
              president staff.
            </li>
          </ul>
        </div>

        <div className="resume-subsection">
          <h3>The Iron Yard</h3>
          <h4>Front End Web Development Student</h4>
          <p>January 2015 – April 2015</p>
          <ul>
            <li>
              Acquired proficiency in HTML, CSS, JavaScript, and various
              libraries and frameworks, including SASS, jQuery, and Backbone.js.
            </li>
            <li>
              Collaborated on team projects and completed individual
              assignments, demonstrating the ability to apply learned skills to
              create functional and polished user applications.
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Education</h2>

        <div className="resume-subsection">
          <h3>The Iron Yard</h3>
          <h4>Front End Web Development</h4>
          <p>January 2015 – April 2015</p>
        </div>

        <div className="resume-subsection">
          <h3>Anderson University (SC)</h3>
          <h4>Bachelor of Science (B.S.), Finance, General</h4>
          <p>January 2009 – January 2013</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
