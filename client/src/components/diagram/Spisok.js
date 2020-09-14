import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Link} from 'react-router-dom'

import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  } from '@material-ui/core';


export const Spisok = (props) => {
  const datas = props.data

  const item = datas.map((t) => {
    return(
      <TableRow hover key={t._id} >
        <TableCell>{t._id }    <Link to={`/detail/${t._id}`}>Открыть</Link></TableCell>
        <TableCell>{t.name}</TableCell>
        <TableCell>{t.region}</TableCell>
        <TableCell>{t.star}</TableCell>
        <TableCell>{t.social.phone}</TableCell>
        <TableCell>{t.social.url}</TableCell>
        <TableCell>{t.social.vk}</TableCell>
      </TableRow>
    )
    
  })

  return (
    <Card
    >
      <CardHeader title="Список турбаз" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>№ ID</TableCell>
                <TableCell>Название</TableCell>
                <TableCell>Регион</TableCell>
                <TableCell>Рейтинг</TableCell>
                <TableCell>Телефон</TableCell>
                <TableCell>Сайт</TableCell>
                <TableCell>Вконтакте</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      
    </Card>
  );
};



