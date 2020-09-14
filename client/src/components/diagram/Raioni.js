import React from 'react';
import { Bar } from 'react-chartjs-2';
import {DataFilter} from '../../data/dataFilter'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';


export const Raioni = (props) => {

  const theme = useTheme();
  const datas = props.data

  const filters = (reg) => {
    return datas.filter((t => t.region  === reg)).length
  }
  const ga = filters('Горно-Алтайск')
  const ka = filters('Кош-Агач')
  const ma = filters('Майма')
  const on = filters('Онгудай')
  const tu = filters('Турочак')
  const ul = filters('Улаган')
  const uk = filters('Усть-Кан')
  const us = filters('Усть-Кокса')
  const ch = filters('Чемал')
  const chy = filters('Чоя')
  const sh = filters('Шебалино')

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [ga, ka, ma, on, tu, ul, uk, us, ch , chy, sh],
        label: 'Количество'
      }
    ],
    labels: DataFilter.regionFilter
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
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

  return (
    <Card>
      <CardHeader
        title="По районам"
      />
      <Divider />
      <CardContent>
        <Box
          height={460}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      
    </Card>
  );
};

