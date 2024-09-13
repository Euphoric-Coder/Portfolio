import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload, IconExternalLink } from "@tabler/icons-react";
import ProfilePicture from "./ProfilePicture";
import profile from "../assets/profile.jpg"

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      <div
        className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6"
        id="About"
      >
        <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center">
          <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
            Hi, I am
          </div>
          <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
            {Info.name}
          </div>
          <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
            I'm a&nbsp;
            <span className="text-primaryColor">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
            {Info.bio}
          </div>
          <div className="xs-mx:w-[90%] flex gap-10 xs-mx:justify-between">
            <Button
              component="a"
              href="https://drive.google.com/file/d/1lLC0ri7gc6k-r_biubdstB1vzM4g80yQ/view?usp=sharing"
              download={Info.name}
              className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]"
              size={btn}
              variant="outline"
              color="#8A2BE2"
              target="_blank"
              rel="noneopener noreferrer"
              radius={"xl"}
              rightSection={<IconExternalLink size={20} />}
            >
              View Resume
            </Button>
            <Button
              component="a"
              // href="/Resume.pdf"
              href="/Resume.pdf"
              download={Info.name}
              className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]"
              size={btn}
              variant="outline"
              color="#8A2BE2"
              radius={"xl"}
              rightSection={<IconDownload size={20} />}
            >
              Download Resume
            </Button>
          </div>
        </div>
        <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
          <ProfilePicture
            src={profile}
            size={325} // Adjust size as needed
            className="lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56"
          />
        </div>
      </div>
    </>
  );
};

export default About;