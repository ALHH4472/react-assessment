'use client'

import { Flex,Avatar,Input, MenuProps, Dropdown, Button, Table} from "antd";
import { poppins } from "../../styles/fonts";
import { DollarOutlined, FilterFilled, SearchOutlined, SmileOutlined, StarOutlined } from "@ant-design/icons";
import { extractItineraries, searchAgencyByName} from "../../data/funtions";
import { useState } from "react";
import styles from '../../styles/components.module.css'

//import Json
import  apiResponse from '../../data/api.json'
//Table settings
import {columns, itinerarie} from '../../data/definitions'

let itinerarieResponse = extractItineraries(apiResponse);

export default function ItinerariesPage() {

  const [itineraries, setItineraries] = useState<itinerarie[]>(itinerarieResponse);

  const search = (text:string) => {

    itinerarieResponse = extractItineraries(apiResponse)

    itinerarieResponse = searchAgencyByName(text,extractItineraries(apiResponse));
    setItineraries(itinerarieResponse);
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label:(<p>Most Popular</p>),
    icon:<SmileOutlined />
  },
  {
    key: '2',
    label:(<p>Price, Low to High</p>),
    icon:<DollarOutlined />
  },
  {
    key: '3',
    label:(<p>Rate, High to Low</p>),
    icon:<StarOutlined />
  },
];
  
  
    return (

      <Flex vertical gap={'large'}>

        <Flex align="center" justify="space-between" className={poppins.className}>
          <h2>Welcome</h2>
          
          <Flex align="center" gap={'middle'} justify="space-evenly">
            <Avatar src={"/profile.jpg"} size={50}/>
            <h2>Pepe Ladino</h2>
          </Flex>

        </Flex>

        <Flex gap={'middle'}>
          <Input className={styles.searchBar} size="large" placeholder="Search"  onChange={(e) => search(e.target.value)} prefix={<SearchOutlined /> 
            }/> 
            <Dropdown menu={{items}}>
              <Button icon={<FilterFilled />} size={'large'}/>
            </Dropdown>
        </Flex>

        <h3 className={poppins.className} >Select the itineraries from the list below</h3>

        <Table<itinerarie> scroll={{ y: 500 }} columns={columns} dataSource={itineraries} className={styles.table}/>;
        
      </Flex>
      
    );
  }