import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundBgContainer,
} from './styledComponents'
import Header from '../Header'

const NotFound = () => (
  <NotFoundBgContainer>
    <Header />
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found.
      </NotFoundDescription>
    </NotFoundContainer>
  </NotFoundBgContainer>
)
export default NotFound
