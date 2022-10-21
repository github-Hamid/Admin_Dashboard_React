import { Box, useTheme } from "@mui/material";
// data grid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataContacts } from "../../data/mockData.js";
import Header from "../../components/Header";

// field: "id" shows the value of key 'id' in mockData
// flex: 1 -> grow to one fraction of the size in terms of flex
// cellClassName -> customize our column cell with classes
// renderCell -> customize the cell

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  function handleClcik(params, event, details) {
    console.log("params:", params, "event:", event, "detais:", details);
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="Managing the contacts" />
      <Box
        m="40px 0 0 0"
        height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          onRowClick={handleClcik}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
