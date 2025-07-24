import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navStyle = (path) =>
    location.pathname === path
      ? 'text-blue-700 font-semibold underline underline-offset-4'
      : 'text-gray-700 hover:text-blue-600 transition duration-200';

  return (
    <header className="bg-white shadow-md py-4 mb-6 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo + Navigation aligned left */}
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-extrabold text-blue-700">
            🧬 CheckMySkin.AI
          </Link>
          <nav className="flex space-x-6 text-lg">
            <Link to="/" className={navStyle('/')}>Home</Link>
            <Link to="/about" className={navStyle('/about')}>About</Link>
            <Link to="*" className={navStyle('*')}>Skin Disease</Link>
            <Link to="/predict" className={navStyle('/predict')}>Check My Skin</Link>
            <Link to="/team" className={navStyle('/team')}>Our Team</Link>
            <Link to="/contact" className={navStyle('/contact')}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
