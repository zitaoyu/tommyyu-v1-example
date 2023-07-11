import AnchorLink from "react-anchor-link-smooth-scroll";

const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
  before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
  before:top-[-50%]`;

const DotLink = ({ page, selectedPage, setSelectedPage }) => {
  return (
    <AnchorLink
      className={`w-3 h-3 rounded-full ${
        selectedPage === page ? selectedStyles : "bg-dark-grey"
      } `}
      href={"#" + page}
      onClick={() => setSelectedPage(page)}
    />
  );
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <DotLink
        page={"home"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={"skills"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={"projects"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <DotLink
        page={"testimonials"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page={"contract"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> */}
    </div>
  );
};

export default DotGroup;
