import type { NextPage } from 'next'
import Link from 'next/link'
import { Box, Card, CardActionArea, CardMedia, CardContent, Divider, Grid, Typography } from '@mui/material'
import styles from '../styles/Work.module.css'

const item_list = [{url:'https://miauchi.com/art-works/scratching-flippers-1/', 
                    img:'/img/work/scratching_flippers_1.jpg', title:'Scratching Flippers I', text:'was designed by modern artist, Yuri Miauchi. Several motors control flippers motion by use of a microcomputer. Max/MSP enables to collaborate between motion and music.'},
                   {url:'/work/', 
                    img:'/img/work/profile_movie.png', title:'Profile Movie', text:'was presented to my family. It is first time to make video.'},
                   {url:'/work/', 
                    img:'/img/work/leather_wallet.jpg', title:'Leather Wallet', text:'was made of some leathers cutted by a laser cutter named Fabool Laser Mini.'},]

const Work: NextPage = () => {
  return (
    <Box>
      <Box component="img" className={styles.img} src='/img/work/cover.jpg'/>
      <Box component="main" className={styles.main}>
        <Typography gutterBottom variant="h4">
          Work
        </Typography>
        <Grid container spacing={3}>
          {item_list.map((item, index) => (
            <Grid item className={styles.grid} key={item.title}>
              <Card>
                <Link href={item.url}>
                  <CardActionArea>
                    <CardMedia component="img" image={item.img}/>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Work