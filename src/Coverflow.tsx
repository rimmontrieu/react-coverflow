import { useEffect, useRef } from "react";

const ITEM_DISTANCE = 200;
const ITEM_ANGLE = -45;
const CENTER_ITEM_POP = 500;
const CENTER_ITEM_DISTANCE = 80;

const Coverflow = (props:{imageData:string[]}) => {
  
  const el = useRef<HTMLDivElement>(null);

  // Help function to set element style transform property
  function setTransform(el:HTMLDivElement, xpos:number, zpos:number, yAngle:number) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
  }
  useEffect(() => {
    target(Math.floor(props.imageData.length * 0.5));
  }, [props.imageData]);

  // Target an item, bring it to center
  function target(index:number) {

    const items = el.current!.children;

    for (let i = 0; i < items.length; i++) {

      const item = items[i] as HTMLDivElement;

      // Center item position and angle
      if (i == index)
        setTransform(item, 0, CENTER_ITEM_POP, 0);
      // Left items position and angle
      else if (i < index) {
        setTransform(item, (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE, 0, -ITEM_ANGLE);
      }
      // Right items position and angle
      else
        setTransform(item, (i - index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE, 0, ITEM_ANGLE);
    }
  }
  
  return (
    <div className="container my-4">
      <div className="coverflow" ref={el}>
        {props.imageData.map((it, index) => 
          <div 
              onClick={() => target(index)}
              key={index} 
              style={{backgroundImage:`url(${it})`}}
              className='coverflow-item'>
          </div>)
        }
      </div>
    </div>
  )
}

export default Coverflow;
