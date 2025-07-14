const Header = () => {
  return (
    <header className="w-full px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-slate-800">
          HealtCode<span className="text-teal-600">360</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#intro"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Intro
          </a>
          <a
            href="#about"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            About us
          </a>
          <a
            href="#why"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Why HC360?
          </a>
          <a
            href="#partners"
            className="text-slate-700 hover:text-teal-600 font-medium"
          >
            Partners
          </a>
        </nav>

        {/* CTA Button */}
        <button className="text-black px-6 py-2 font-medium text-sm hover:bg-teal-100 rounded-md">
          Start with my Insurance
        </button>
      </div>
    </header>
  );
};

export default Header;
