import React from "react";
import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const Client_1 = "/images/client/Client Logo black-01.svg";
const Client_2 = "/images/client/Client Logo black-02.svg";
const Client_3 = "/images/client/Client Logo black-03.svg";
const Client_4 = "/images/client/Client Logo black-04.svg";
const Client_5 = "/images/client/Client Logo black-05.svg";
const Client_6 = "/images/client/Client Logo black-06.svg";
const Client_7 = "/images/client/Client Logo black-07.svg";

const clients = [
  { src: Client_1 },
  { src: Client_2 },
  { src: Client_3 },
  { src: Client_4 },
  { src: Client_5 },
  { src: Client_6 },
  { src: Client_7 },
];

const BrandMultiple = () => {
  return (
    <>
      <div className="pt-10 md:pt-20">
        <Slider
          width="200px"
          duration={35}
          pauseOnHover={false}
          blurBorders={true}
          blurBoderColor={"#82CAAA"}
        >
          {clients.map((client, index) => (
            <Slider.Slide key={index}>
              <Image
                src={client.src}
                alt={`Client Logo ${index + 1}`}
                className="md:w-40 w-28"
                width={300}
                height={300}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
      <div className="pt-2 md:pt-6">
        <Slider
          width="200px"
          duration={20}
          pauseOnHover={false}
          blurBorders={true}
          blurBoderColor={"#82CAAA"}
        >
          {clients.map((client, index) => (
            <Slider.Slide key={index}>
              <Image
                src={client.src}
                alt={`Client Logo ${index + 1}`}
                className="md:w-40 w-28"
                width={300}
                height={300}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
      <div className="pt-2 md:pt-6">
        <Slider
          width="200px"
          duration={40}
          pauseOnHover={false}
          blurBorders={true}
          blurBoderColor={"#82CAAA"}
        >
          {clients.map((client, index) => (
            <Slider.Slide key={index}>
              <Image
                src={client.src}
                alt={`Client Logo ${index + 1}`}
                className="md:w-40 w-28"
                width={300}
                height={300}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BrandMultiple;
