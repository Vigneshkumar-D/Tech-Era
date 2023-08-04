import {
  CourseDetailsDescription,
  CourseDetail,
  CourseDescription,
  TechImage,
  CourseTitle,
} from './styledComponents'

const CourseItemDetails = props => {
  const {eachItem} = props
  const {imageUrl, name, description} = eachItem
  return (
    <CourseDetail>
      <TechImage src={imageUrl} alt={name} />
      <CourseDetailsDescription>
        <CourseTitle>{name}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </CourseDetailsDescription>
    </CourseDetail>
  )
}
export default CourseItemDetails
