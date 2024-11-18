import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Get Me A Chai</h1>
      <br />
      <p className="font-bold text-center">A Crowdfunding platform for creaters. Get funded by your fans and followers. Start Now!</p>
      <br />
      <div className="flex justify-center">
        <Link href={"/login"}><button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
      </div>
      <br />
      <div className="text-white container mx-auto py-14 px-10 md:px-0">
        <h2 className="text-2xl text-center font-bold mb-14">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-4 flex flex-col items-center text-center">
            <Image src="/man.gif" alt="studying" className="bg-slate-400 rounded-full w-[82px] md:w-[90px]" width={90} height={90} />
            <p className="text-center font-bold">Fund Yourself</p>
            <p>your fans are available to help you</p>
          </div>
          <div className="item space-y-4 flex flex-col items-center text-center">
            <Image src="/dollar.gif" alt="dollar" className="bg-slate-400 rounded-full w-[82px] md:w-[90px]" width={90} height={90} />
            <p className="text-center font-bold">Fund Yourself</p>
            <p>your fans are available to help you</p>
          </div>
          <div className="item space-y-4 flex flex-col items-center text-center">
            <Image src="/group.gif" alt="group" className="bg-slate-400 rounded-full w-[82px] md:w-[90px]" width={90} height={90} />
            <p className="text-center font-bold">Fans wants to help</p>
            <p>your fans are available to help you</p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h2>Learn More About Us</h2>
        <br />
        <p className="text-center">At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a <br /> space where creativity and innovation can thrive.
          <br />
          <br />
          Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator <br /> making engaging videos, or an influencer sharing your passion, Get Me A Chai is here to help you achieve your goals.
          <br />
          <br />
          We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and <br /> foster a culture of creativity and innovation.</p>
      </div>
      <br />
      <br />
    </div>
  );
}