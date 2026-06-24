import { animated } from '@react-spring/web'
import type { ComponentProps } from 'react'

type AnimatedDivStyle = ComponentProps<typeof animated.div>['style']

interface Props {
  resumeProps: AnimatedDivStyle
  goBack: () => void
}

const ResumeContent: React.FC<Props> = ({ resumeProps, goBack }) => {
  return (
    <animated.div style={resumeProps}>
      <div className='flex flex-col gap-2 justify-start'>
        My Resume Content Here
        <button
          onClick={goBack}
          className='text-gray-500 hover:text-white w-fit'
        >
          Go Back
        </button>
      </div>
    </animated.div>
  )
}

export default ResumeContent
