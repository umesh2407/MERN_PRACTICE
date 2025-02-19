import React from "react";
import Profile from "../components/Form/Profile";
import Interests from "../components/Form/Interests";
import Settings from "../components/Form/Settings";

const TabForm = () => {
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

  return <div>TabForm</div>;
};

export default TabForm;
