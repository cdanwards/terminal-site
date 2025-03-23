import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6">
        <div className="mb-4 md:mb-0 flex-shrink-0">
          <div className="profile-image-container rounded-full overflow-hidden border-2 border-green-400 w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
            <Image
              src="/headshot.jpg"
              alt="Dan Edwards"
              width={160}
              height={160}
              className="profile-image"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl mb-3">About Me</h1>
          <p className="mb-2">
            I&apos;m a seasoned Web & Mobile Developer with a passion for
            crafting engaging and efficient applications. At Infinite Red, I
            focus on leveraging the power of React Native, TypeScript, and AI to
            deliver exceptional user experiences.
          </p>
        </div>
      </div>
      <p className="mb-2">
        With over 8 years of software development experience, I&apos;ve worked
        on a variety of projects ranging from financial applications to mobile
        apps for Fortune 5 companies. I enjoy solving complex problems and
        finding elegant solutions through clean, maintainable code.
      </p>
      <p>
        When I&apos;m not coding, you&apos;ll find me training for distance
        running, language learning and hanging out with my amazing family in the
        great outdoors!
      </p>
    </div>
  );
};

export default About;
