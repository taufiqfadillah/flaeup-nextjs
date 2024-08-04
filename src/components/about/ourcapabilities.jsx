import Slider from 'react-infinite-logo-slider';

const OurCapabilities = () => {
  return (
    <div className="py-20 bg-[#82CAAA] text-black">
      <div className="text-2xl md:text-5xl px-4 md:px-14 pb-0 md:pb-20">Our Capabilities</div>
      <div className="py-0 md:py-24 pt-24 md:pt-0">
        <Slider width="100%" duration={20} toRight={false} pauseOnHover={false} blurBorders={false} blurBoderColor="#82caaa" className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {['/images/video/Branding Video.mp4', '/images/video/Retouching Video.mp4', '/images/video/UIUX Video.mp4'].map((src, index) => (
            <div key={src}>
              <video src={src} alt={`Video ${index + 1}`} className="h-[300px] md:h-[260px]" autoPlay muted loop style={{ width: 'calc(100% - 20px)', objectFit: 'cover', marginRight: '20px' }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurCapabilities;
