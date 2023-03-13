import React from 'react'
import { Table } from 'react-bootstrap'
import RoundChart from '../../components/Chart/RoundChart'
import './Tuition.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {}

interface Income {
  totalCard: number
  totalCash: number
  totalIncome: number
  totalUser: number
  totalIncomeFromBook: number
  totalIncomeFromClass: number
  totalDetails: any[] // Để design lại thêm details
}

const chartData = [
  {
    name: 'Total Card',
    actualNumber: 68,
    expectedNumber: 79
  },
  {
    name: 'Total Cash',
    actualNumber: 68,
    expectedNumber: 23
  },
  {
    name: 'Total Income',
    actualNumber: 44,
    expectedNumber: 11
  },
  {
    name: 'Total User',
    actualNumber: 32,
    expectedNumber: 78
  },
  {
    name: 'Total Income From Book',
    actualNumber: 32,
    expectedNumber: 78
  },
  {
    name: 'Total Income From Class',
    actualNumber: 32,
    expectedNumber: 78
  },
]

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function Tuition({ }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className='tuition'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Tuition (Bar Chart)" {...a11yProps(0)} />
            <Tab label="Tuition (Table)" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className='d-flex' style={{ justifyContent: 'space-between' }}>
            <h2>Goal Chart (Million Unit)</h2>
            <p>.</p>
          </div>
          <RoundChart dataTuitionChart={chartData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2>Tuition Statistical Table</h2>
          <Table className="tableWarningLog">
            <thead>
              <tr className='text-center'>
                <th>STT</th>
                <th className='text-start'>Name</th>
                <th>Actual</th>
                <th>Expected</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((item, index) => {
                return <tr className='text-center'>
                  <td>{index + 1}</td>
                  <td className='text-start'>{item.name}</td>
                  <td>{item.actualNumber}</td>
                  <td>{item.expectedNumber}</td>
                </tr>
              })}
            </tbody>
          </Table>
        </TabPanel>
      </Box>
    </div>
  )
}