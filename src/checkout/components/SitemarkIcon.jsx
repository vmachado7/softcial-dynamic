import { Link } from 'react-router-dom';

export default function SitemarkIcon() {
  return (
    <Link to="/blog">
      <img
        src="https://montenegrodanielfelipe.com/softcial/svg/softcial.svg"
        alt="Sitemark Icon"
        style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
      />
    </Link>
  );
}
