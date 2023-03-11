import { content } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  const { project } = content;
  return (
    <section id="point" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>


      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {project.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  );
};

export default Testimonials;
