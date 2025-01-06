import { Flex } from "antd";
import { agencyCards } from "../data/definitions";

  const AgencyCard:React.FC<{agencyName: string}>=({agencyName}) =>{

    const card = agencyCards.find((card) => card.name === agencyName);

    return(
        <Flex align="center" justify="center" gap="small">
            <img 
                src={`/logos/${card?.icon || 'kiwico.svg'}`} 
                alt='Agency logo'
                height={25}
                width={25} 
            />
            <p>{agencyName}</p>
        </Flex>
    )

  }


  export default AgencyCard;