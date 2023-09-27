import { animated } from '@react-spring/web'

interface Props {
  resumeProps: any
  goBack: () => void
}

const AboutMeContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col h-[75vh] '>
        <div className='pb-6'>
          <div className='text-xl font-semibold text-gray-300'>About Me</div>
          <button
            onClick={goBack}
            className='text-gray-500 hover:text-white w-fit'
          >
            Go Back
          </button>
        </div>
      </div>
    </animated.div>
  )
}

export default AboutMeContent
