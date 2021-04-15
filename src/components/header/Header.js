import '../../App.css';
import logo from '../../images/logo/logo.png';
import basket from '../../images/basket.jpg';

function Header() {
  return (
      <header className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo-area">
                        <a href="index.html">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="custom-navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="main-menu">
                        <ul>
                            <li className="active"><a href="index.html">home</a></li>
                            <li><a href="about.html">about</a></li>
                            <li><a href="menu.html">menu</a></li>
                            <li><a href="#">blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-home.html">Blog Home</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact-us.html">contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-1">
                    <div class="logo-basket">
                        <img src={basket} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
      </header>
  );
}

export default Header;
