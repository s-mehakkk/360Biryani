import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-3 text-center text-white">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © 2025 Designed by{' '}
          <a
            href="https://culinaryguide.in/"
            target="_blank"
            rel="noreferrer"
            className="text-white underline hover:no-underline"
          >
            Culinary Guide
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
