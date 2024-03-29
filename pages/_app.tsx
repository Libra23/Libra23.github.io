import * as React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, ThemeProvider, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { theme } from '../components/theme'
import CssBaseline from '@mui/material/CssBaseline'

const link_list = [{text :'Home', url:'/'}, {text :'Work', url:'/work'}, {text :'Blog', url:'/blog'}, {text :'AboutMe', url:'/aboutme'}]

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0)

  const onClickDrawerToggle = (open:any) => (event:any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  }

  const onClickTab = (value:any) => {
    setValue(value);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>栢菅技術工房 | Kaya-Tech-Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kaya-Tech-Studio." />
      </Head>
      <AppBar position="static" style={{ boxShadow: 'none'}} >
        <Toolbar>
          <Button>
            <Link href='/'>
              <img src='/favicon.ico'  alt='me' width='64' height='64' />
            </Link>
          </Button>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            栢菅技術工房 | Kaya-Tech-Studio
          </Typography>
          <Tabs value={value} sx={{ display:{ xs:'none', md:'block'}}}>
            {link_list.map((e, index) => (
              <Link href={e.url} key={e.text}>
                <Tab label={e.text} onClick={()=>{onClickTab(index)}}/>
              </Link>
            ))}
          </Tabs>
          <IconButton onClick={onClickDrawerToggle(true)} sx={{ display:{ md:'none', xs:'block'}}}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" anchor="right" open={open} onClose={onClickDrawerToggle(false)}>
        <Box onClick={onClickDrawerToggle(false)} onKeyDown={onClickDrawerToggle(false)} role="presentation">
          <List>
            {link_list.map((e, index) => (
              <ListItem button key={e.text}>
                <Link href={e.url}>
                  <ListItemText primary={e.text} onClick={onClickDrawerToggle(false)}/>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Component {...pageProps} />
      <footer>
        Copyright. 2022 Kaya-Tech-Studio
      </footer>
    </ThemeProvider>
  )
}

export default MyApp