import React from "react";
import Paper from "@material-ui/core/Paper";
import RewardsPopper from "../ui/RewardsPopper";

function HeaderPreviewMenu(props) {
  const renderContent = () => {
    if (props.content === "rewards") {
      return <RewardsPopper link="/rewards" />;
    }
  };

  return <Paper className="header_preview_menu">{renderContent()}</Paper>;
}

export default HeaderPreviewMenu;
