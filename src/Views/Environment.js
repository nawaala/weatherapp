import React, { useState } from 'react';
import './Environment.css';
import mould from '../Assets/mould.jpg';
import title from '../Assets/RiskAssessments.jpg';

var TooCold = (
  <div>
    Turn on heating, buy Thermal Insulated Door Curtains{' '}
    <a href="https://www.amazon.co.uk/Homealexa-90-210-Tear-Proof-Soundproof/dp/B0BHY211KJ/ref=asc_df_B0BHY211KJ/?tag=googshopuk-21&linkCode=df0&hvadid=641612032736&hvpos=&hvnetw=g&hvrand=4011110912975250678&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9046083&hvtargid=pla-1943913470856&mcid=20a5e1dd36a131b7af197c9399814e9d&th=1">
      Amazon has good ones
    </a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident
    </p>
  </div>
);

var TooHot = (
  <div>
    Open all Windows at night, Buy house plants, Adjust ceiling fan, Switch off lights{' '}
    <a href="/">windows</a>, Call for a checkup
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident
    </p>
  </div>
);

var Mouldy = (
  <div>
    Open windows so ventilation comes in, and apply mould spray if the mould persists on returning,{' '}
    <a href="https://deconresponse.co.uk/services/mould-removal/?campaign=20437916629&content=668804998545&keyword=mould%20help&utm_term=mould%20help&utm_campaign=Mould+Remediation&utm_source=adwords&utm_medium=ppc&hsa_acc=4986546872&hsa_cam=10592390633&hsa_grp=151406335159&hsa_ad=668804998545&hsa_src=g&hsa_tgt=kwd-1717258061037&hsa_kw=mould%20help&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIheDpvp_ngwMVK5lQBh2CeAAaEAAYASAAEgJHVPD_BwE">
      , call emergency services
    </a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    </p>
    <img src={mould} alt="Mould" />
  </div>
);

var Dusty = (
  <div>
    Turn on heating, buy Thermal Insulated Door Curtain
  </div>
);

var option = [
  {
    option: 'Too Cold',
    advice: TooCold,
  },
  {
    option: 'Too Hot',
    advice: TooHot,
  },
  { option: 'Mould', advice: Mouldy },
  {
    option: 'Dusty',
    advice: Dusty,
  },
];

const Environment = () => {
  const [selectedOption, setSelectedOption] = useState(option[0]);

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    const selectedOption = option.find((item) => item.option === selected);
    setSelectedOption(selectedOption);
  };


  return (
    <div>
      <div className="environment-title">
        Risk Assessments
        <img src={title} alt="Risk Assessments" height={200} />
        <h1>Select an option</h1>
        <select id="SelectChoice" onChange={handleSelectChange}>
          {option.map((item) => (
            <option key={item.option} value={item.option}>
              {item.option}
            </option>
          ))}
        </select >  
        <p id="selectDetail">{selectedOption.advice}</p>
      </div>
    </div>
  );
};

export default Environment;

