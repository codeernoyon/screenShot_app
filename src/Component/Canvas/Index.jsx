import { useBackground } from '../../Context/Background';
import Documentation from '../Documentation/Index';
import './style.scss';

function Index() {
    const {
 data, image, rotateX, rotateY, rotate, skew,
} = useBackground();

  return (
    <div className="canvas">
      {/* <span className="canvas_title">
        Your URL link image here
      </span> */}
      <div className="canvas_warper">
        <div className="image_warper" style={{ background: `var(${data}) ` }}>
          <div className="img">
            <div className="img_warper">
              {image.url === undefined
               ? <Documentation />
               : (
                 <img
                   src={image.url}
                   alt="img"
                   className="canvas_img"
                   style={{
                  transform: `rotateX(${rotateX}deg) 
                  rotateY(${rotateY}deg) 
                  rotate(${rotate}deg) 
                  skew(${skew}deg)`,
                 }}
                 />
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
