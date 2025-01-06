
'use client'


import { Button, Flex, Layout, Menu,} from 'antd';
import  ConnectingAirportsIcon from '../../lib/ConnectAirportsIcon'
import LogOutIcon from '../../lib/LogOutIcon';

import Image from 'next/image';
import styles from '../../styles/components.module.css'

const { Sider,Content } = Layout;


export default function DashboardLayout({children,
}: {
  children: React.ReactNode;
})  {
  
  return (
    <Layout className={styles.layoutContainer}>
    
      {/* Sidebar component*/}  
      <Sider className={styles.sidebar} theme="light"collapsed={false}>
        {/* Content of the sidebar*/} 
        <Flex vertical className={styles.flexContainer}>

            {/* Company logo*/} 
            <Flex justify='center' align='center' vertical>
                <Image src='/logos/auxo.svg'
                width={120}
                height={100}
                alt='Auxo company logo'
                />
            </Flex >

            {/*Selection Menu*/} 
            <Flex vertical className={styles.flexMenu}>
                <Button href='/itineraries' size='large' color="default" variant="filled" icon= {<ConnectingAirportsIcon/>}>
                    Itineraries
                </Button>
            </Flex >

            {/*Log out button*/} 
            <Flex vertical className={styles.flexLogout}>
                <Button href='/' className={styles.logOutButton} size='large' color="default" variant="filled" icon= {<LogOutIcon/>}>
                    Log out
                </Button>
            </Flex>
    </Flex>
      </Sider>

       {/*Central information*/}
      <Layout> 

         {/*Content*/} 
        <Content className={styles.content}>
            {children}
        </Content>


      </Layout>
    </Layout>
  );
}
