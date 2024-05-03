import React, { useState } from 'react';
import './Tabs.css'; // Import your CSS file
import ExploreSerivces from '../../components/ExploreSerivces/ExploreSerivces'
import SerivceDisplay from '../../components/SerivceDisplay/SerivceDisplay'
import ExploreSerivcesmen from '../ExploreSerivces-men/ExploreSerivces-men';
import SerivceDisplayMen from '../SerivceDisplay-men/SerivceDisplayMen';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          Women
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          Men
        </button>
        
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <Tab1Content />}
        {activeTab === 'tab2' && <Tab2Content />}
       
      </div>
    </div>
  );
};

const Tab1Content = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreSerivces category={category} setCategory={setCategory}/>
      <SerivceDisplay category={category} />
      
    </div>
  );
};

const Tab2Content = () => {
    const [category, setCategory] = useState("All");
  return <div>
     <ExploreSerivcesmen category={category} setCategory={setCategory}/>
     <SerivceDisplayMen category={category}/>
  </div>;
};

export default Tabs;
