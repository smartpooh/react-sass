import React from "react";

// import react pro sidebar components
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

// import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiChevronDown } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


// import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const SideBar = ({menuCollapse, setMenuCollapse}) => {
  
    // create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    // condition checking to change state from true to false and vice versa
    // eslint-disable-next-line no-unused-expressions
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" className="side-bar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
              {menuCollapse ? (<img className="small-logo" alt=" small-logo" src="/image/sidebar/small-logo.png" />) : (<img className="big-logo" alt=" big-logo" src="/image/sidebar/big-logo.png" />)}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                // <FiArrowRightCircle />
                <img alt="show" src="/image/sidebar/show.svg" />
              ) : (
                <img alt="hide" src="/image/sidebar/hide.svg" />
                // <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active icon={<img alt="dashboard" src="/image/sidebar/item-dashboard.svg" />}>
                Dashboard
              </MenuItem>
              <SubMenu title="Request" icon={<img alt="request" src="/image/sidebar/item-request.svg" />}>
                <MenuItem icon={<img alt="invoice" src="/image/sidebar/item-invoice.svg" />}>
                  Invoice Approval
                </MenuItem>
                <MenuItem icon={<img alt="move" src="/image/sidebar/item-move.svg" />}>Enrollment Request</MenuItem>
                <MenuItem icon={<img alt="payment" src="/image/sidebar/item-payment.svg" />}>Payment Request</MenuItem>
              </SubMenu>  


            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<img alt="logout" src="/image/sidebar/out.svg" />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;