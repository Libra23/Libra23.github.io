import type { NextPage } from 'next'
import Link from 'next/link'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import WebIcon from '@mui/icons-material/Web';
import styles from '../../styles/Blog.module.css'

const Home: NextPage = () => {
  return (
    <Box>
      <Box component="img" className={styles.img} src='/img/blog/cover.jpg'/>
      <Box component="main" className={styles.main}>
        <Typography gutterBottom variant="h4">
          Blog
        </Typography>
        <List>
          <ListItem>
            <Link href='/blog/how_to_make_this'>
              <ListItemButton>
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary="How to Make Ths Web Page" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Home