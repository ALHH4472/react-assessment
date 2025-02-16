import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const logOut = () => (
    <svg  width="24" height="25" viewBox="0 0 24 25" fill="none">
        <title>Log Out icon</title>
        <path d="M18 15.6455L21 12.6455L18 9.64551" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12.6455H7" stroke="#828282" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M14 16.6455V19.2455C14 20.571 12.9255 21.6455 11.6 21.6455H5.4C4.07452 21.6455 3 20.571 3 19.2455L3 6.04551C3 4.72002 4.07452 3.64551 5.4 3.64551L11.6 3.64551C12.9255 3.64551 14 4.72002 14 6.04551L14 8.64551" stroke="#828282" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
  );

  const IconLogOut = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={logOut} {...props} />
  );

  const LogOutIcon: React.FC = () => (
    <>
    <IconLogOut/>
    </>
      
    
  );

  export default LogOutIcon;