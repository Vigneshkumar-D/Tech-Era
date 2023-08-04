import {Link} from 'react-router-dom'
import {CourseListItem, CourseLogo, CourseName} from './styledComponents'
// import './index.css'

const CourseCard = props => {
  const {eachCourse} = props
  const {id, name, logoUrl} = eachCourse

  return (
    <Link to={`/courses/${id}`} className="link-item">
      <CourseListItem>
        <CourseLogo src={logoUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </CourseListItem>
    </Link>
  )
}
export default CourseCard
