import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const connectingAirports = () => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <title>connecting Airports</title>
      <path d="M12.075 19.4L9.475 15H6.325C6.10833 15 5.92917 14.9292 5.7875 14.7875C5.64583 14.6458 5.575 14.4667 5.575 14.25C5.575 14.0333 5.64583 13.8542 5.7875 13.7125C5.92917 13.5708 6.10833 13.5 6.325 13.5H9.475L12.075 9.10001H12.7L11.4 13.5H14.7L15.45 12.5H16L15.475 14.25L16 16H15.45L14.7 15H11.4L12.7 19.4H12.075ZM3.3 10.9L4.6 6.50001H1.3L0.55 7.50001H0L0.525 5.75001L0 4.00001H0.55L1.3 5.00001H4.6L3.3 0.600006H3.925L6.525 5.00001H9.675C9.89167 5.00001 10.0708 5.07084 10.2125 5.21251C10.3542 5.35417 10.425 5.53334 10.425 5.75001C10.425 5.96667 10.3542 6.14584 10.2125 6.28751C10.0708 6.42917 9.89167 6.50001 9.675 6.50001H6.525L3.925 10.9H3.3Z" fill="#01C2D2"/>
    </svg>
  );

  const ConnectingAirportsIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={connectingAirports} {...props} />
  );

  const ConnectAirportsIcon: React.FC = () => (
    <>
    <ConnectingAirportsIcon/>
    </>
      
    
  );

  export default ConnectAirportsIcon;