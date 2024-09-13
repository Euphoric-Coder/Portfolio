import { socialLinks } from "../User";

const Social = () => {
  const socialIcons = socialLinks.map((socialLink, index) => {
    return (
      <a
        key={index}
        href={`${socialLink.link}`}
        target="_blank"
        className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
      >
        <div data-aos="fade-up-left" data-aos-duration="800">
          {" "}
          <socialLink.icon className="-rotate-90" size={45} />
        </div>
      </a>
    );
  });

  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-48 -left-56 rotate-90 -ml-2 ">
      {socialIcons}
      <hr className="border w-40 rounded-full  bg-textColor border-textColor border-b-2" />
    </div>
  );
};
export default Social;
