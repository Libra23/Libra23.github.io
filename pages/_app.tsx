import * as React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from '@mui/material'
import AppBarWithTab from '../components/AppBarWithTab';
import DrawerWithLink from '../components/DrawerWithLink';
import { theme } from '../components/theme'
import CssBaseline from '@mui/material/CssBaseline'
import * as api from '../scripts/api'

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
      <DrawerWithLink open={open} on_click_menu={() => onClickDrawerToggle(true)} tab_info_list={link_list}/>
      <Component {...pageProps} />
      <footer>
        Copyright. {api.getData().year} Kaya-Tech-Studio
      </footer>
    </ThemeProvider>
  )
}

export default MyApp