import { BarProps } from "./types";
import "./style.css";

const Bar: React.FC<BarProps> = ({ color }) => {
    return <div className={`bar bar-${color}`}></div>;
};

export { Bar };
