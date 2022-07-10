import * as React from 'react';
import { Box, Drawer, List, ListItem, ListItemText} from '@mui/material'
import Link from 'next/link'

type TabInfo = {
  text: string
  url: string
  }

type Props = {
  open: boolean
  tab_info_list: TabInfo[]
  on_click_menu: (flag: boolean) => void
}

function DrawerWithLink(props: Props) {
  return (
    <Drawer variant="temporary" anchor="right" open={props.open} onClose={()=>props.on_click_menu(false)}>
      <Box onClick={()=>props.on_click_menu(false)} onKeyDown={()=>props.on_click_menu(false)} role="presentation">
        <List>
          {props.tab_info_list.map((e, index) => (
            <ListItem button key={e.text}>
              <Link href={e.url}>
                <ListItemText primary={e.text} onClick={()=>props.on_click_menu(false)}/>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default DrawerWithLink