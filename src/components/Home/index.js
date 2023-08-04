import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseCard from '../CourseCard'
import Header from '../Header'

import {
  HomeContainer,
  CourseHeading,
  CourseList,
  LoaderContainer,
  BgContainer,
  CoursesContainer,
  FailureViewContainer,
  FailureImage,
  FailureTitle,
  FailureDes,
  RetryButton,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstant.initial, courseList: []}

  componentDidMount() {
    this.getCourseItems()
  }

  getCourseItems = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedDate = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({
        courseList: formattedDate,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  successView = () => {
    const {courseList} = this.state
    return (
      <CoursesContainer>
        <CourseHeading>Courses</CourseHeading>
        <CourseList>
          {courseList.map(eachCourse => (
            <CourseCard eachCourse={eachCourse} key={eachCourse.id} />
          ))}
        </CourseList>
      </CoursesContainer>
    )
  }

  loadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getCourseItems()
  }

  failureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureTitle>Oops! Something Went Wrong</FailureTitle>
      <FailureDes>
        We cannot seem to find the page you are looking for.
      </FailureDes>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderPages = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.loadingView()
      case apiStatusConstant.success:
        return this.successView()
      case apiStatusConstant.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <Header />
        <HomeContainer>{this.renderPages()}</HomeContainer>
      </BgContainer>
    )
  }
}
export default Home
