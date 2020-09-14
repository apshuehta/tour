import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import {Prices} from './Prices';
import {Spisok} from './Spisok';
import {Raioni} from './Raioni';
import TasksProgress from './TasksProgress';
import {TotalCustomers} from './TotalCustomers';
import TotalProfit from './TotalProfit';
import {Stars} from './Stars';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export const Dashboard = (props) => {
  const classes = useStyles();
  const data = props.links

  return (
    <div
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Prices data={data} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers data={data}/>
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress data={data}/>
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit data={data}/>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <Raioni data={data}/>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <Stars data={data}/>
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Spisok data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

