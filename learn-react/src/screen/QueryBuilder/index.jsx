import React from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid2,
  IconButton,
  Paper,
  ButtonGroup,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const RuleGroup = ({ level }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        mt: 2,
        ml: level * 2,
        borderLeft: level === 0 ? "1px solid #CCCCCC" : null,
      }}
    >
      <Box display="flex" alignItems="center">
        <ButtonGroup variant="contained" sx={{ marginRight: 2 }}>
          <Button>AND</Button>
          <Button sx={{ background: "#DCDCDC", color: "#000" }}>OR</Button>
        </ButtonGroup>
        <Box display="flex" flexGrow={1} justifyContent="flex-end">
          <Button startIcon={<AddIcon />} sx={{ textTransform: "none" }}>
            Add Rule
          </Button>
          <Button startIcon={<AddIcon />} sx={{ ml: 2, textTransform: "none" }}>
            Add Group
          </Button>
        </Box>
        <IconButton sx={{ ml: 2 }}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box mt={2}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Default</InputLabel>
              <Select>
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Default</InputLabel>
              <Select>
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          {/* Add more Selects as needed */}
        </Grid2>
      </Box>
      <Divider sx={{ mt: 2 }} />
      {/* Render nested group */}
      {/* <RuleGroup level={level + 1} /> */}
    </Paper>
  );
};

const RuleBuilder = () => {
  return (
    <Box p={2}>
      hkjnjknjknjkklmk
      <RuleGroup level={0} />
      {/* <RuleGroup level={0} /> */}
    </Box>
  );
};

const QueryBuilder = () => {
  return (
    <div style={{ padding: 100 }}>
      <Typography variant="h4" gutterBottom>
        Rule Builder
      </Typography>
      <RuleBuilder />
    </div>
  );
};

export default QueryBuilder;
