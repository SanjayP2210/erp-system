/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "assets/components/SoftBox";
import SoftTypography from "assets/components/SoftTypography";
import SoftAvatar from "assets/components/SoftAvatar";

// Images
import team1 from "assets/img/team-1.jpg";
import team2 from "assets/img/team-2.jpg";
import team3 from "assets/img/team-3.jpg";
import team4 from "assets/img/team-4.jpg";

function Messages() {
  const messagesAvatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <Card>
      <SoftBox display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <SoftTypography variant="body2" color="text">
          Messages
        </SoftTypography>
        <SoftBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            <SoftAvatar src={team1} alt="team-1" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
            <SoftAvatar src={team2} alt="team-2" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
            <SoftAvatar src={team3} alt="team-3" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
            <SoftAvatar src={team4} alt="team-4" size="sm" sx={messagesAvatarStyles} />
          </Tooltip>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Messages;
