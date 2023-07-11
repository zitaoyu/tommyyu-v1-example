const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src={process.env.PUBLIC_URL + "/assets/linkedin.png"}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="twitter-link"
          src={process.env.PUBLIC_URL + "/assets/twitter.png"}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="facebook-link"
          src={process.env.PUBLIC_URL + "/assets/facebook.png"}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src={process.env.PUBLIC_URL + "/assets/instagram.png"}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
