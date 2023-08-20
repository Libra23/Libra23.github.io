import * as React from 'react';
import { AppBar, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

type TabInfo = {
  text: string
  url: string
}

type Props = {
  title: string
  tab_info_list: TabInfo[]
  on_click_menu: (flag: boolean) => void
}

function AppBarWithTab(props: Props) {
  const [value, setValue] = React.useState(0)

  function onClickTab(value: number): void {
    setValue(value);
  }

  return (
    <AppBar position="static" style={{ boxShadow: 'none'}} >
      <Toolbar>
        <Button>
          <Link href='/'>
            <img src='/favicon.ico'  alt='me' width='64' height='64' />
          </Link>
        </Button>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {props.title}
        </Typography>
        <Tabs value={value} sx={{ display:{ xs:'none', md:'block'}}}>
          {props.tab_info_list.map((e, index) => (
            <Link href={e.url} key={e.text} passHref>
              <Tab component="a" label={e.text} onClick={()=>{onClickTab(index)}}/>
            </Link>
          ))}
        </Tabs>
        <IconButton onClick={()=>{props.on_click_menu(true)}} sx={{ display:{ xs:'block', md:'none'}}}>
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarWithTab