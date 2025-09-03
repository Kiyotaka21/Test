import { useState, useCallback } from "react";

export const useBlock = (mouseEnterCallback) => {
    const [isActive, setActive] = useState(false);
    const mouseEnterHandler = useCallback(() => {
        setActive(true);
        mouseEnterCallback();
      }, [mouseEnterCallback]);
    
      return {isActive, mouseEnterHandler}
}

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
  const {isActive, mouseEnterHandler} = useBlock()

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export const Block2 = ({ mouseEnterCallback, content }) => {
    const {isActive, mouseEnterHandler} = useBlock()

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <p>{content}</p>
    </div>
  );
};

export const Block3 = ({ mouseEnterCallback, userData }) => {
    const {isActive, mouseEnterHandler} = useBlock()

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </div>
  );
};