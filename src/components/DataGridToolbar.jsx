import { GridToolbarContainer,GridToolbarColumnsButton,GridToolbarDensitySelector ,GridToolbarFilterButton,GridToolbarExport} from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const DataGridToolbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <GridToolbarContainer >
      <GridToolbarColumnsButton sx={{ color : colors.grey[100]}} />
      <GridToolbarFilterButton sx={{ color : colors.grey[100]}}/>
      <GridToolbarDensitySelector sx={{ color : colors.grey[100]}}/>
      <GridToolbarExport sx={{ color : colors.grey[100]}}/>
    </GridToolbarContainer>
  )
}

export default DataGridToolbar