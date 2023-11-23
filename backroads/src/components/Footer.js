import { pageLinks, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((el) => {
          return (
            <li key={el.id}>
              <a href={el.href} className='footer-link'>
                {el.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((el) => {
          return (
            <li key={el.id}>
              <a
                href={el.href}
                rel='noreferrer'
                target='_blank'
                className='footer-icon'
              >
                <i className={el.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
