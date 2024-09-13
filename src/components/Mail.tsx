const Mail = () => {
  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-44 -right-56 mr-3 rotate-90">
      <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a
          href="mailto:deydsagnik48@gmail.com"
          className="font-mono tracking-widest hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out text-xl"
        >
          deydsagnik48@gmail.com
        </a>
      </div>
      <hr className="border w-40 rounded-full  bg-textColor border-textColor border-b-2" />
    </div>
  );
};
export default Mail;
