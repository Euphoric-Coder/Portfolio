import { IconHexagonLetterSFilled } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links: string[] = [
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Education",
];

// Function to handle smooth scrolling with offset
const handleScrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 120;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const navLinks = (col: boolean, clicked: (() => void) | null) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ): void => {
    event.preventDefault(); // Prevent default anchor behavior
    if (clicked) clicked();
    handleScrollToSection(id); // Adjust scroll position
  };

  return links.map((link, index) => (
    <a
      key={index}
      onClick={(e) => handleClick(e, link)}
      className={`${
        col ? "flex flex-col items-center" : ""
      } text-textColor font-bold text-[1.43em] poppins-semibold transition-all duration-500 ease-in-out hover:text-primaryColor`}
      href={`#${link}`}
    >
      {link}
    </a>
  ));
};

const Header: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [shadow, setShadow] = useState<boolean>(false);

  const controlNavbar = (): void => {
    if (window.scrollY > 70) {
      setShadow(true); // Apply glass effect when scrolling
    } else {
      setShadow(false); // Remove glass effect when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav
      className={`flex translate-y-0 ${
        shadow
          ? "bg-white bg-opacity-30 backdrop-blur-md border-b border-solid border-white border-opacity-10 shadow-[0px_10px_30px_-10px_#020c1b]"
          : "bg-bgColor"
      } transition-transform duration-500 ease-in-out fixed w-full z-10 h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20`}
    >
      <IconHexagonLetterSFilled
        className="z-10"
        size={isMobile ? 45 : 60}
        color="#8A2BE2"
        stroke={1.25}
      />
      <div className="bs:flex gap-8 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };

// <nav
//   className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${
//     shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
//   } transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28  px-10  justify-between items-center xs-mx:px-4 xs-mx:h-20 `}
// >
