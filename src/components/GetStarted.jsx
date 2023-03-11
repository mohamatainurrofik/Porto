import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter} flex-col bg-gradient-to-r from-blue-500 to-blue-300 hover:from-pink-500 hover:to-yellow-500 w-[100%] h-[100%] rounded-full `}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">My CV</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
