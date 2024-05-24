import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "../../../../components/SoftBox";
import SoftTypography from "../../../../components/SoftTypography";

function TodoCard() {
  return (
    <Card>
      <SoftBox bgColor="dark" variant="gradient">
        <SoftBox p={3}>
          <SoftBox display="flex" justifyContent="space-between">
            <SoftTypography variant="h5" color="white">
              To Do
            </SoftTypography>
            <SoftBox textAlign="center" lineHeight={1}>
              <SoftTypography variant="h1" color="white" fontWeight="bold">
                7
              </SoftTypography>
              <SoftTypography variant="button" color="white" fontWeight="regular">
                items
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftTypography variant="body2" color="white" fontWeight="regular">
            Shopping
          </SoftTypography>
          <SoftTypography variant="body2" color="white" fontWeight="regular">
            Meeting
          </SoftTypography>
        </SoftBox>
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <SoftBox textAlign="center" color="white" py={0.5} lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </SoftBox>
        </Tooltip>
      </SoftBox>
    </Card>
  );
}

export default TodoCard;
