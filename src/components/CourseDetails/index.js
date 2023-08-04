import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItemDetails from '../CourseItemDetails'
import Header from '../Header'
import {
  BgContainer,
  CourseDetailsContainer,
  LoaderContainer,
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

class CourseDetails extends Component {
  state = {apiStatus: apiStatusConstant.initial, courseDetail: []}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      //   const updatedData = {
      //     id: data.course_details.id,
      //     name: data.course_details.name,
      //     imageUrl: data.course_details.image_url,
      //     description: data.course_details.description,
      //   }
      const updatedData = [data.course_details].map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({
        courseDetail: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  successView = () => {
    const {courseDetail} = this.state
    return (
      <>
        {/* <CourseItemDetails eachItem={courseDetail} /> */}
        {courseDetail.map(each => (
          <CourseItemDetails key={each.id} eachItem={each} />
        ))}
      </>
    )
  }

  loadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getCourseDetails()
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

  renderPage = () => {
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
        <CourseDetailsContainer>{this.renderPage()}</CourseDetailsContainer>
      </BgContainer>
    )
  }
}
export default CourseDetails
