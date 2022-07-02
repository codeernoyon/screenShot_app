import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext({
  data: null,
  setValue: (value) => {},
});
export const useBackground = () => useContext(BackgroundContext);

function Background({ children }) {
  const [data, setData] = useState('');
  const [image, setImage] = useState('');
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [skew, setSkew] = useState(0);

  /// ///BAckground//////
  const setEventData = (data) => {
    setData(data);
  };

  /// //////Get Images//////
  const setImageData = (image) => {
    setImage(image);
  };
  /// //////Get Images//////
  const setRotateXData = (rotateX) => {
    setRotateX(rotateX);
  };
  /// //////Get Images//////
  const setRotateYData = (rotateY) => {
    setRotateY(rotateY);
  };
  /// //////Get Images//////
  const setRotateData = (rotate) => {
    setRotate(rotate);
  };
  /// //////Get Images//////
  const setSkewData = (skew) => {
    setSkew(skew);
  };
  const value = {
  data,
  image,
  rotateX,
  rotateY,
  rotate,
  skew,
  setEventData,
  setImageData,
  setRotateXData,
  setRotateYData,
  setRotateData,
  setSkewData,
};
  return (
    <BackgroundContext.Provider
      value={value}
    >
      {children}
    </BackgroundContext.Provider>
  );
}
export default Background;
