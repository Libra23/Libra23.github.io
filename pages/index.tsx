import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Box, Card, CardContent, Divider, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Box>
      <img src='/img/home/cover.jpg' className={styles.img}/>
      <Box component="main" className={styles.main}>
      <Card>
        <CardContent>
          <Typography variant="h5">
            News
          </Typography>
          <Divider/>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="left">2022/05/05</TableCell>
                <TableCell align="left">Open this page</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">2022/03/23</TableCell>
                <TableCell align="left">Start Kaya-Tech-Studio</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </Box>
    </Box>
  )
}

export default Home