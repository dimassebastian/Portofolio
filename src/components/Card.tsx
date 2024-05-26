import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface Props {
  title?: ReactNode;
  content?: ReactNode;
  link?: string;
  [key: string]: any;
}
const Card: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 0.2, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card"
    >
      <motion.h2 layout="position">{props.title}</motion.h2>
      {isOpen && (
        <motion.div className="text">
          <p>{props.content}</p>
          <a
            href="https://github.com/dimassebastian"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository: {props.link}
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};
export default Card;
