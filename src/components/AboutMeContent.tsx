import { animated } from "@react-spring/web"
import Link from "next/link"
// icons
import { FiArrowUpRight } from "react-icons/fi"

interface Props {
  resumeProps: any
  goBack: () => void
}

const AboutMeContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className="flex flex-col lg:h-[65vh] md:h-[60vh] h-[75vh]">
        <div className="pb-6">
          <div className="text-xl font-semibold text-gray-300">About Me</div>
          <button
            onClick={goBack}
            className="text-gray-500 hover:text-white w-fit"
          >
            Go Back
          </button>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto relative pr-4 text-base">
          <div className="text-gray-300">
            Hello! My name is Max, and I am a software developer and UI/UX
            designer
          </div>
          <div className="text-gray-300">
            I am highly experienced in complex front-end systems and
            architecture design, and I am currently working as a full stack
            developer in NextJS and React Native.
          </div>
          <div className="text-gray-300">
            I am a big fan of casually drawing in my spare time, and you can
            find my art{" "}
            <Link
              href="/projects/artwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300"
            >
              here
              <FiArrowUpRight className="inline-block" />
            </Link>
            .
          </div>
          <br />
          <div className="text-gray-300">
            If you want to get in touch regarding my projects, my portfolio or
            possible job opportunities, feel free to reach out to me on my{" "}
            <Link
              href="https://www.linkedin.com/in/abdulkhalikov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300"
            >
              LinkedIn
              <FiArrowUpRight className="inline-block" />
            </Link>{" "}
            or any of my socials listed on the contact page.
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default AboutMeContent
