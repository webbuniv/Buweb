import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "../../../../components/SoftBox";
import SoftTypography from "../../../../components/SoftTypography";

function Emails() {
  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <SoftTypography variant="body2" color="text">
          Emails (21)
        </SoftTypography>
        <Tooltip title="Check your emails" placement="top">
          <SoftBox component="a" href="#">
            <SoftTypography variant="body2">Check</SoftTypography>
          </SoftBox>
        </Tooltip>
      </SoftBox>
    </Card>
  );
}

export default Emails;
