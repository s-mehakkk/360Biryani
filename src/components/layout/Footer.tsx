import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-3 text-center text-white">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © 2024 by 360 BRIYANI Powered and secured by{' '}
          <a
            href="https://wix.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white underline hover:no-underline"
          >
            Wix
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
