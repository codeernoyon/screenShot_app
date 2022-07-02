import { useEffect, useState } from 'react';
import { FiFeather } from 'react-icons/fi';
import Li from '../../Api/li';
import Logo from '../../assets/final-logo.png';
import { useBackground } from '../../Context/Background';
import './style.scss';

function Index() {
  const [search, setSearch] = useState(null);
  const [download, setDownload] = useState(null);
  const [flipX, setFlipX] = useState(0);
  const [flipY, setFlipY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [skew, setSkew] = useState(180);
  const {
 setEventData, setImageData, setRotateXData, setRotateYData, setRotateData, setSkewData,
} = useBackground();
  const color = ['--bg-clr-first', '--bg-clr-second', '--bg-clr-third', '--bg-clr-fourth', '--bg-clr-five', '--bg-clr-six', '--bg-clr-seven', '--bg-clr-eight', '--bg-clr-nine', '--bg-clr-ten', '--bg-clr-eleven', '--bg-clr-twelve'];
  const update = (index) => {
    setEventData(color[index]);
  };

  /// ////api //////////
  const apiKey = process.env.REACT_APP_URL_KEY2;
  const URL = `https://api.apiflash.com/v1/urltoimage?access_key=${apiKey}&wait_until=page_loaded&url=${search}&format=jpeg&fresh=true&full_page=true&scroll_page=true&no_ads=true&element_overlap=true`;

  useEffect(() => {
    const fetchApi = async () => {
      if (search == null) {
         return;
      }
        const res = await fetch(URL);
        setImageData(res);
        setDownload(res.url);
    };
    fetchApi();
  }, [search]);
  const screenShote = (e) => {
    e.preventDefault();
  };
  /// ////input values/////
  useEffect(() => {
    setRotateXData(flipX);
  }, [flipX]);
  useEffect(() => {
    setRotateYData(flipY);
  }, [flipY]);
  useEffect(() => {
    setRotateData(rotate);
  }, [rotate]);
  useEffect(() => {
    setSkewData(skew);
  }, [skew]);

  return (
    <div className="sideBer">
      <div className="top">
        <ul className="ul">
          <li className="li">
            <a href="#home" className="link">
              <img src={Logo} alt="logo" srcSet="" className="logo" />
            </a>
          </li>
          <li className="li ">
            <form onSubmit={screenShote} className="searchArea">
              <input
                type="text"
                id="searchInput"
                placeholder="Search with URL"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="icon" onClick={() => fetchApi()}>
                <FiFeather />
              </div>
            </form>
          </li>
        </ul>
      </div>
      <div className="design_plate">
        <div className="edit_btn">
          <span className="editBtn">Edit</span>
        </div>
        <div className="inputs_functionality">
          <div className="FlipX inputs_functionality_value">
            <span className="text">FlipX : </span>
            <input type="range" id="FlipX" min="0" max="360" value={flipX} onChange={(e) => setFlipX(e.target.value)} />
          </div>
          <div className="FlipY inputs_functionality_value">
            <span className="text">FlipY : </span>
            <input type="range" id="FlipY" min="0" max="360" value={flipY} onChange={(e) => setFlipY(e.target.value)} />
          </div>
          <div className="retaetX inputs_functionality_value">
            <span className="text">Rotate : </span>
            <input type="range" id="Rotate" min="0" max="360" value={rotate} onChange={(e) => setRotate(e.target.value)} />
          </div>
          <div className="retaetY inputs_functionality_value">
            <span className="text">Skew : </span>
            <input type="range" id="skew" min="0" max="360" value={skew} onChange={(e) => setSkew(e.target.value)} />
          </div>

        </div>
        <div className="backgrounds">
          <div className="backgrounds_warper">
            <div className="background_title">
              <span>Backgrounds</span>
            </div>
            <div className="backgrounds_colors">
              <ul className="backgrounds_colors_ul">
                {
                  Li.map((item, index) => (
                    <li className="backgrounds_colors_li" key={item.index} onClick={() => update(index)} />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="download_btn">
          <a href={download} download target="_blank" rel="noreferrer">
            <span className="downloadBtn">Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Index;
