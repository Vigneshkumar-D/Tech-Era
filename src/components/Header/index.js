import {withRouter, Link} from 'react-router-dom'
import {
  HeaderSubContainer,
  HeaderContainer,
  AppLogoImage,
} from './styledComponents'

// import './index.css'

const Header = () => (
  <HeaderContainer>
    <HeaderSubContainer>
      <Link to="/" className="link-item">
        <AppLogoImage
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </HeaderSubContainer>
  </HeaderContainer>
)
export default withRouter(Header)
