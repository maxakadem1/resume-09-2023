import { animated } from "@react-spring/web"
import Link from "next/link"
import type { ComponentProps } from "react"
// icons
import { FiArrowUpRight } from "react-icons/fi"

type AnimatedDivStyle = ComponentProps<typeof animated.div>["style"]

interface Props {
  resumeProps: AnimatedDivStyle
  goBack: () => void
}

const ExperienceContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className="flex flex-col lg:h-[65vh] md:h-[60vh] h-[75vh]">
        <div className="pb-6">
          <div className="text-xl font-semibold text-gray-300">Experience</div>
          <button
            onClick={goBack}
            className="text-gray-500 hover:text-white w-fit"
          >
            Go Back
          </button>
        </div>

        <div className="flex flex-col gap-20 overflow-y-auto p-4 relative">
          {/* E1 */}
          <div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-300 pb-2 text-lg">
                Software Developer - Core Product Team
              </div>
              <div className="text-gray-500 pb-2 text-sm">
                (Mar 2024 - Present)
              </div>
            </div>

            <Link
              href="https://www.pollardbanknote.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 italic hover:text-white w-fit"
            >
              Pollard Banknote, Winnipeg, MB{" "}
              <FiArrowUpRight className="inline-block" />
            </Link>
            <div className="flex flex-col gap-3 text-gray-300 pt-2">
              <div>
                - Created and currently maintain department-wide front-end
                architecture used across 8+ client teams and approximately 50
                developers, establishing reusable patterns and technical
                standards for Next.js applications, shared libraries, and
                widget-based integrations.
              </div>
              <div>
                - Architected and expanded a shared front-end platform
                comprising 30+ reusable React components and 20+ production
                widgets, personally implementing approximately half of the
                component library and one-third of the widget catalog.
              </div>
              <div>
                - Serve as a daily point of assistance for approximately 15
                developers across rotating client teams, reviewing architectural
                proposals and resolving complex React, Next.js, accessibility,
                shared-library, CI/CD, package-upgrade, and client-integration
                challenges.
              </div>
              <div>
                - Led the technical delivery of Arizona&apos;s first client
                implementation across a team of approximately eight developers,
                breaking requirements into workstreams, assigning technical
                ownership, reviewing implementation decisions, and unblocking
                delivery under a tight production deadline.
              </div>
              <div>
                - Guided a full application migration to Next.js and
                Pollard&apos;s shared widget architecture, applying patterns
                developed by the Core Product Team and enabling the client team
                to independently maintain and extend the production application
                after launch.
              </div>
              <div>
                - Built an internal development platform for reusable widgets
                and components, including local sandboxes, hot reloading,
                Storybook documentation, mock APIs, test harnesses, templates,
                automated testing, and build, versioning, packaging, and
                publishing workflows.
              </div>
              <div>
                - Built core front-end capabilities for Konsole, an internal
                platform used by business teams to manage games, polls, surveys,
                and other client content, implementing API integrations,
                role-based permissions, complex forms, and validation workflows.
              </div>
              <div>
                - Scaled front-end knowledge across client teams by mentoring
                co-op through senior-level developers, leading onboarding and
                knowledge-sharing sessions, and documenting core architecture,
                development workflows, and integration patterns.
              </div>
            </div>
          </div>

          {/* E2 */}
          <div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-300 pb-2 text-lg">
                React Software Developer
              </div>
              <div className="text-gray-500 pb-2 text-sm">(2023)</div>
            </div>

            <Link
              href="https://outreachgenius.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 italic hover:text-white w-fit"
            >
              ACE Marketing <FiArrowUpRight className="inline-block" />
            </Link>
            <div className="flex flex-col gap-3 text-gray-300 pt-2">
              <div>
                - Led the design process for all components, pages, and
                interactions on company websites, keeping the experience
                consistent and intuitive.
              </div>
              <div>
                - Chose frontend technologies and used them to implement
                responsive components and pages.
              </div>
              <div>
                - Refactored a legacy Vue codebase into a modern React
                TypeScript codebase for a Chrome extension.
              </div>
              <div>
                - Implemented Material UI to improve the Chrome extension
                design, styling, and usability.
              </div>
              <div>
                - Researched and implemented optimizations, including
                performance improvements and code refactoring.
              </div>
            </div>
          </div>

          {/* E3 */}
          <div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-300 pb-2 text-lg">
                Full Stack React Developer (Co-op Alternative)
              </div>
              <div className="text-gray-500 pb-2 text-sm">(2022)</div>
            </div>
            <Link
              href="https://github.com/University-of-Manitoba-Computer-Science/trackr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 italic hover:text-white w-fit"
            >
              University of Manitoba <FiArrowUpRight className="inline-block" />
            </Link>
            <div className="flex flex-col gap-3 text-gray-300 pt-2">
              <div>
                - Worked on university-owned technology for data visualization
                using React, Material UI, and SQL.
              </div>
              <div>
                - The technology is used for data visualization on devices such
                as Raspberry Pis and Arduinos.
              </div>
            </div>
          </div>

          {/* E4 */}
          <div>
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-300 pb-2 text-lg">UI/UX Designer</div>
              <div className="text-gray-500 pb-2 text-sm">(2022)</div>
            </div>
            <div className="text-gray-500 italic w-fit">
              Freelance (Self employed) - See Projects from the Homepage{" "}
            </div>
            <div className="flex flex-col gap-3 text-gray-300 pt-2">
              <div>
                - Created personalized illustrations for over 20 clients,
                including album covers, personalized gifts, and other client
                work.
              </div>
              <div>
                - Developed personalized styles for each illustration depending
                on client needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default ExperienceContent
