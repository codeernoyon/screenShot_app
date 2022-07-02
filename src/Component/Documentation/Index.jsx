import Video from '../../assets/pexels-kelly-l-10183459.mp4';
import './style.scss';

function Index() {
  return (
    <div className="documentation">
      <div className="warper">
        <div className="content">
          <div className="title">
            <span>Welcome to ScreenShots World</span>
          </div>
          <div className="content_text">
            <p>
              Here you take screenShots with Web URL.
              <span>
                We provide you here ScreenShot with editable
                feature and download editable screenShot image.
              </span>
              <span className="download">
                Here are more feature For you.
                One of them one Click Download Image.
              </span>
            </p>
          </div>
        </div>
        <div className="video_warper">
          <video autoPlay muted id="video">
            <source src={Video} type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Index;