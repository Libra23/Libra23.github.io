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
          He was born in Okayama and raised in Oita. He got a bachelor&apos;s degree from Yokohama National University and a master&apos;s degree from Tokyo Institute of Technology in Mechanical Engineering.
        </Box>
        <Box>
          He has worked at a surgical robotics company as an embeded and control engineer since april 2020.
        </Box>
        <br />
        <Typography variant="h4">
          Skill
        </Typography>
        <Divider />
        <ul>
          <li>C, C++, Jave, Python</li>
          <li>CMake</li>
          <li>ROS</li>
          <li>FreeRTOS</li>
          <li>SolidWorks, Fusion360</li>
          <li>Eagle</li>
          <li>Force Reflecting Bilateral Control</li>
          <li>Leather Craft using a Laser Cutter</li>
        </ul>
      </Box>
    </Box>

  )
}

export default AboutMe