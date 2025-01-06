 'use client'

import { Avatar, Flex, Radio } from "antd"
import { raleway, poppins } from "../../../styles/fonts";
import AgencyCard from "@/lib/AgencyCard";
import { SendOutlined } from "@ant-design/icons";
import styles from "../../../styles/components.module.css"
import {getLegsByIt_id} from "../../../data/funtions"

const LegsPage:React.FC<{params: {it_id:string}}>=({params}) =>{

    const it_id = params.it_id // itinerarie id
    const legs = getLegsByIt_id(it_id) // extract legs by itinerarie id

    return(

    <Flex className={poppins.className} vertical gap={'small'}>
        
        {/* Head */}
        <Flex align="center" justify="space-between" className={raleway.className}>
            <h2>{it_id}</h2>
            
            <Flex align="center" gap={'middle'} justify="space-evenly">
                <Avatar src={"../profile.jpg"} size={50}/>
                <h2>Pepe Ladino</h2>
            </Flex>
        </Flex>

    {/* Cards container */}
        {legs.map   ((leg) =>(  
        <Flex gap={"large"} align="center" justify="center">
        
            <Radio className={styles.radioButton} value={1}></Radio>

            {/* Card*/}
            <Flex  gap={"large"} justify="center" className={styles.legCardContainer} vertical>
                
                {/* head */}
                <Flex className={styles.legCardHead}  align="center" justify="space-between">
                    <AgencyCard agencyName={leg.airline_name}/>
                    <p>{leg.id}</p>
                </Flex>

                {/* Title id */}
                <Flex gap={'small'} className={styles.idTitle}>
                    <p>AIRLINE ID: </p><p>{leg.airline_id}</p>
                </Flex>

                {/* Middle body */}
                <Flex gap={'middle'} justify="center" align="center">
                    <Flex vertical align="center" justify="center">
                        <strong>{leg.departure_airport}</strong>
                        <Flex gap={'middle'} align="center" justify="center">
                            <SendOutlined />
                            <p>{leg.departure_time}</p>
                        </Flex>
                        
                    </Flex>
                    <Flex vertical align="center" justify="center">
                        <strong>{leg.arrival_airport}</strong>
                        <Flex gap={'middle'} align="center" justify="center">
                            <SendOutlined />
                            <p>{leg.arrival_time}</p>
                        </Flex>
                    </Flex>
                </Flex>

                {/* end*/}
                <Flex gap={'middle'} align="center" justify="center">
                        <Flex gap={'small'}>
                            <p>STOPS: </p><p>{leg.stops}</p>
                        </Flex>
                        <Flex gap={'small'}>
                            <p>DURATION MINS: </p><p>{leg.duration_mins}</p>
                        </Flex>
                </Flex>
            </Flex>
        </Flex>
        
        ))}
        


    </Flex>
    )

}

export default LegsPage;