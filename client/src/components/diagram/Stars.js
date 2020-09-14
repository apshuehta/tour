import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {StarIcons} from './StarIcons'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';



export const Stars = (props) => {

  const theme = useTheme();
  const datas = props.data
  const starOne = datas.filter((t => t.star  === 1)).length
  const starTwo= datas.filter((t => t.star  === 2)).length
  const starThree = datas.filter((t => t.star  === 3)).length
  const starFour = datas.filter((t => t.star  === 4)).length
  const starFive = datas.filter((t => t.star  === 5)).length
  console.log(starOne)

  const data = {
    datasets: [
      {
        data: [starOne, starTwo, starThree, starFour, starFive],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.yellow[600],
          colors.green[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['1 звезда', '2 звезды', '3 звезды', '4 звезды' , '5 звезд']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      label: 1,
      arg: starOne,
      color: colors.indigo[500]
    },
    {
      label: 2,
      arg: starTwo,
      color: colors.red[600]
    },
    {
      label: 3,
      arg: starThree,
      color: colors.orange[600]
    }
    ,
    {
      label: 4,
      arg: starFour,
      color: colors.yellow[600]
    },
    {
      label: 5,
      arg: starFive,
      color: colors.green[600]
    }
  ];

  return (
    <Card>
      <CardHeader title="Количество звезд" />
      <Divider />
      <CardContent>
        <Box height={360} position="relative">
          <Doughnut data={data} options={options}/>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({label, color, arg}) => (
            <Box key={label} p={1} textAlign="center">
              <StarIcons name={label}/>
              <Typography style={{ color }} variant="h4">
                {arg !== undefined ? arg*100/ datas.length : '0'}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};


