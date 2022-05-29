import * as React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, ThemeProvider, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AppBarWithTab from '../components/AppBarWithTab';
import { theme } from '../components/theme'
import CssBaseline from '@mui/material/CssBaseline'

const link_list = [{text :'Home', url:'/'}, {text :'Work', url:'/work'}, {text :'Blog', url:'/blog'}, {text :'AboutMe', url:'/aboutme'}]

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);

  function onClickDrawerToggle(open:boolean): void {
    setOpen(open);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>栢菅技術工房 | Kaya-Tech-Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kaya-Tech-Studio." />
      </Head>
      <AppBarWithTab title='栢菅技術工房 | Kaya-Tech-Studio' on_click_menu={() => onClickDrawerToggle(true)} tab_info_list={link_list}/>
      <Drawer variant="temporary" anchor="right" open={open} onClose={()=>onClickDrawerToggle(false)}>
        <Box onClick={()=>onClickDrawerToggle(false)} onKeyDown={()=>onClickDrawerToggle(false)} role="presentation">
          <List>
            {link_list.map((e, index) => (
              <ListItem button key={e.text}>
                <Link href={e.url}>
                  <ListItemText primary={e.text} onClick={()=>onClickDrawerToggle(false)}/>
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