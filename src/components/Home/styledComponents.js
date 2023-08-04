import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  padding-left: 10%;
  padding-right: 10%;
`
export const CourseHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: left;
  color: #1e293b;
`
export const CourseList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 400;
  width: 300;
`
export const FailureTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #1e293b;
`
export const FailureDes = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #475569;
`
export const RetryButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #4656a1;
  padding: 10px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  color: #ffffff;
  width: 100px;
`
