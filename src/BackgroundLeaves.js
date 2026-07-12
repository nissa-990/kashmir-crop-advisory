import leaf from "./assets/leaf.jpg";
import "./BackgroundLeaves.css";

function BackgroundLeaves() {
  return (
    <>
      <img src={leaf} alt="" className="global-leaf leaf1" />
      <img src={leaf} alt="" className="global-leaf leaf2" />
      <img src={leaf} alt="" className="global-leaf leaf3" />
      <img src={leaf} alt="" className="global-leaf leaf4" />
      <img src={leaf} alt="" className="global-leaf leaf5" />
      <img src={leaf} alt="" className="global-leaf leaf6" />
    </>
  );
}

export default BackgroundLeaves;