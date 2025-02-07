import { CodeBracketIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const Hero = ({ title = 'Become a React Dev', subtitle = 'Find Your Next React Job' }) => {
  return (
    <section className="max-w-7xl mx-auto bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-4xl shadow-lg shadow-blue-200 py-24 mb-8 m-5">
      <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <CodeBracketIcon className="h-16 w-16 text-slate-800" />
            <BriefcaseIcon className="h-16 w-16 text-slate-800" />
          </div>
          <h1 className="text-4xl font-extrabold text-stone-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-stone-800 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Hero;