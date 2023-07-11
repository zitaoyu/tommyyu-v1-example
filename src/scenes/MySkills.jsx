import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient className="w-1/3" />
          <p className="mt-10 mb-7">
            Welcome to our website, where we invite you to embark on a journey
            of unparalleled experiences. With our team of experts and years of
            industry knowledge, we are dedicated to providing you with memorable
            moments that will leave a lasting impression. Whether you're seeking
            adventure, relaxation, or cultural immersion, we curate unique
            experiences tailored to your preferences. Let us guide you through
            extraordinary destinations, connecting you to the essence of each
            place and creating lifelong memories.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          <div
            id="profile-pic-border"
            className={
              isAboveMediumScreen
                ? `relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]`
                : ""
            }
          >
            <img
              alt="skills"
              className=" z-10"
              src="/assets/skills-image.png"
            />
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Welcome to our website, where we invite you to embark on a journey
            of unparalleled experiences. With our team of experts and years of
            industry knowledge, we are dedicated to providing you with memorable
            moments that will leave a lasting impression. Whether you're seeking
            adventure, relaxation, or cultural immersion, we curate unique
            experiences tailored to your preferences. Let us guide you through
            extraordinary destinations, connecting you to the essence of each
            place and creating lifelong memories.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            At [Company Name], we embrace the power of innovation to redefine
            possibilities and shape the future. We are at the forefront of
            technological advancements, constantly seeking new ways to enhance
            your life and transform industries. Our cutting-edge solutions and
            forward-thinking mindset enable us to revolutionize the way you
            live, work, and interact with the world. Join us on this journey as
            we push boundaries, challenge norms, and bring innovation to the
            forefront of every endeavor.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Imagination has the power to transport us to extraordinary realms
            and ignite our deepest desires. At [Company Name], we believe in the
            limitless potential of imagination and its ability to shape our
            world. Our creative visionaries breathe life into ideas, infusing
            them with magic, wonder, and beauty. Through our imaginative
            approach, we bring dreams to reality, crafting immersive experiences
            that transcend the ordinary. Join us as we invite you to explore the
            realms of the extraordinary, where imagination knows no bounds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
