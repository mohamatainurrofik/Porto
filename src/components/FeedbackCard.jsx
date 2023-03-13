import { quotes } from "../assets";

const FeedbackCard = ({ description, link, title, picture }) => (
  <div className="group flex justify-between flex-col px-10 mt-10 rounded-[20px]  max-w-[370px] md:mr-7 sm:mr-5 mr-0 my-0 feedback-card">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
      <div className="mt-5 inset-0">
        <img src={picture} alt="" className="w-[100%] h-[100%] rounded-lg" />
      </div>

      <div className="w-full h-full absolute flex flex-row inset-0 bg-black/80 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex flex-col ml-4  text-center">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-base">{description}</p>
            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a target="_blank" href={link == "" ? "#home" : link}>Read More</a></button>
          </div>
        </div>
      </div>

    </div>

  </div>
);


export default FeedbackCard;
