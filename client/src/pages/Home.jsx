import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center px-4 mt-48">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
        Welcome to CheckMySkin.AI
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Upload a photo of your skin condition and get an instant prediction using AI.
        This tool is built for educational and awareness purposes.
      </p>
      <Link
        to="/predict"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
      >
        Get Started
      </Link>
    </div>
  );
}
