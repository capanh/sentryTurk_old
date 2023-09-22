import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'

const RealTimeMonitorDashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Agents" subtitle="Manage your agents" />
      </Box>

    </Box>
  )
}

export default RealTimeMonitorDashboard