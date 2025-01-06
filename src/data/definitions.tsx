import AgencyCard from "@/lib/AgencyCard";
import { TableProps } from "antd";
import Link from "next/link";

export type itinerarie = {
    id: string;
    legs: string[];
    price: Number;
    agent: string;
    agent_rating: number;
  };

  export type leg = {
    id: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: number;
    stops: number;
    airline_name: string;
    airline_id: string;
    duration_mins: number;
  };

  
  export const agencyCards =[
    {
      name:'Wizzair.com', icon: 'wizzair.svg'
    },
    {
      name:'British Airways', icon: 'britishAirways.svg'
    },
    {
      name:'Lufthansa', icon: 'lufthansa.svg'
    },
    {
      name:'Trip.com', icon: 'tripco.svg'
    },
    {
      name:'Kiwi.com',icon: 'kiwico.svg'
    },
    {
      name:'CheapFligths',icon: 'cheapfly.svg'
    },   
]


 export const columns: TableProps<itinerarie>['columns'] = [
  {
    title: 'Id itinerare',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <Link href={`itineraries/${text}`}>{"  "+text+"  "}</Link>,
    align:'center'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <>{"£"+text}</>,
    align:'center'
  },
  {
    title: 'Agent',
    dataIndex: 'agent',
    key: 'agent',
    align:'center',
    render: (_, itinerarie) => (
      <>
      <AgencyCard agencyName = {itinerarie.agent}/>
      </>
    
    ),
  },
  {
      title: 'Agent rating',
      dataIndex: 'agent_rating',
      key: 'agent_rating',
      align:'center'
  }
];

  