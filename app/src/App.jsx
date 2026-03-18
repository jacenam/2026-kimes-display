import Slide0Intro from './components/slides/Slide0Intro'
import Slide1Market from './components/slides/Slide1Market'
import Slide2Middleware from './components/slides/Slide2Middleware'
import Slide3Tracking from './components/slides/Slide3Tracking'
import Slide4AdReview from './components/slides/Slide4AdReview'
import Slide5PatientMsg from './components/slides/Slide5PatientMsg'
import Slide6Outro from './components/slides/Slide6Outro'

function App() {
  return (
    <div className="slide-container">
      <Slide0Intro />
      <Slide1Market />
      <Slide2Middleware />
      <Slide3Tracking />
      <Slide4AdReview />
      <Slide5PatientMsg />
      <Slide6Outro />
    </div>
  )
}

export default App
