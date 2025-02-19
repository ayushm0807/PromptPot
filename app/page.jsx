import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head-text text-center'>
      Discover & Contribute
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'>Smart Prompts</span>
    </h1>
    <p className='desc text-center'>
    PromptPot is an AI prompting platform designed for creators to explore and share innovative prompts effortlessly. 
    Sign in and start using it today!
    </p>

    <Feed />
  </section>
);

export default Home;
