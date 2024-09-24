import "./Footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="">
        <img src={facebook_icon} alt="facebook" />
        </a>
        <a href="instagram.com/anujkumar_04/">
        <img src={instagram_icon} alt="instagram" />
        </a>
        <a href="x.com/anujKBalmiki">
        <img src={twitter_icon} alt="twitter" />
        </a>
        <a href="">
        <img src={youtube_icon} alt="youtube" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2024 Netflix, Inc.
        <br/>developed_by_Anuj
      </p>
    </div>
  )
}

export default Footer
