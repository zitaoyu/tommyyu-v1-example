import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-54 bg-red pb-8">
      <div className="flex flex-col items-center mx-auto">
        <SocialMediaIcons />
        <p className="font-playfair font-semibold text-2xl text-yellow m-2">
          Tommy Yu
        </p>
        <p className="font-playfair text-md text-yellow m-2">
          ©2022 YU. All Rights Reserved.
        </p>
      </div>
    </footer>

    // Original:
    // <footer className="h-64 bg-red pt-10">
    //   <div className="w-10/12 mx-auto">
    //     <SocialMediaIcons />
    //     <div className="md:flex justify-center md:justify-between text-center ">
    //       <p className="font-playfair font-semibold text-2xl text-yellow">
    //         JANE ESPER
    //       </p>
    //       <p className="font-playfair text-md text-yellow">
    //         ©2022 ESPER. All Rights Reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
