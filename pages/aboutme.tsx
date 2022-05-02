import type { NextPage } from 'next'
import { Avatar, Box, Divider, Typography } from '@mui/material'
import styles from '../styles/AboutMe.module.css'

const AboutMe: NextPage = () => {
  return (
    <Box>
      <Box component="img" className={styles.img} src='/img/aboutme/cover.jpg'/>
      <Box component="main" className={styles.main}>
        <Typography variant="h4">
          Biography
        </Typography>
        <Divider />
        <Avatar src="/img/aboutme/avatar.jpg" sx={{ width: 256, height: 256}}/>
        <Typography variant="h5">
          <b>Hiroki Kayasuga</b>
        </Typography>
        <Box>
          He is a robot engineer in Tokyo.
        </Box>
        <Box>
          He was born in Okayama and raised in Oita. He received bachelor&apos;s degree from Yokohama National University and master&apos;s degree from Tokyo Institute of Technology in Mechanical Engineering.
        </Box>
        <Box>
          Since april 2020, He begin working at a surgical robot maker as an embeded and control engineer.
        </Box>
        <br />
        <Typography variant="h4">
          Skill
        </Typography>
        <Divider />
        <ul>
          <li>C, C++, Python</li>
          <li>CMake</li>
          <li>ROS</li>
          <li>FreeRTOS</li>
          <li>SolidWorks, Fusion360</li>
          <li>Eagle</li>
          <li>Force Reflecting Bilateral Control</li>
        </ul>
      </Box>
    </Box>

  )
}

export default AboutMe