import { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = ["intro", "about", "partners", "services", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "Reason for being" },
    { id: "partners", label: "How it works" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <aside className="relative w-40 pl-4">
      <div className="absolute left-1 h-[190px] w-1 bg-gray-300 rounded-full top-1" />

      <nav className="flex flex-col space-y-6 mt-2 relative z-10 text-sm">
        {navItems.map((item) => (
          <div key={item.id} className="relative flex items-center">
            {activeSection === item.id && (
              <span className="absolute left-[-16.5px] w-3 h-3 bg-teal-600 rounded-full" />
            )}
            <a
              href={`#${item.id}`}
              className={`${
                activeSection === item.id
                  ? "text-teal-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </a>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
