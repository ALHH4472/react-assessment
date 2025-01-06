import { Button, Flex } from "antd";
import Image from 'next/image';
import styles from '../styles/components.module.css'

export default function Home() {
  return (
    <Flex align="center" justify="center" vertical>
        <Image src='logos/auxo.svg' width={500} height={500} alt='Auxo company logo'/>
        
        <Button href="/itineraries" className={styles.frontButton}  size="large" color="primary" variant="filled">
            Start
        </Button>
    </Flex>
  );
}