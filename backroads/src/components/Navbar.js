import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((el) => {
            return (
              <li key={el.id}>
                <a href={el.href} className='nav-link'>
                  {' '}
                  {el.text}{' '}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((el) => {
            return (
              <li key={el.id}>
                <a
                  rel='noreferrer'
                  href={el.href}
                  target='_blank'
                  className='nav-icon'
                >
                  <i className={el.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
