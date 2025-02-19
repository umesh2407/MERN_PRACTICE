import React, { useState } from "react";
import Profile from "../components/Form/Profile";
import Interests from "../components/Form/Interests";
import Settings from "../components/Form/Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "Umesh",
    age: "21",
    email: "abc@gmail.com"
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="w-full h-[400px]">
      <div className="flex gap-12 border border-black rounded-md w-[300px] p-5 m-8">
        {tabs.map((t, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="m-10">
        <ActiveComponent data={formData} setData={setFormData} />
      </div>
    </div>
  );
};

export default TabForm;
