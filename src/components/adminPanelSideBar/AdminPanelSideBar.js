import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarHeader, SidebarFooter, SubMenu } from 'react-pro-sidebar';
import "./SideBarStyle.scss";
import { ReactComponent as DashboardIcon } from './../../assets/bar-chart.svg';
import { ReactComponent as UserDashboardIcon } from './../../assets/users.svg'
import { ReactComponent as FormManagerIcon } from './../../assets/layers.svg';
import { ReactComponent as ForumManagerIcon } from './../../assets/message-square.svg';
import { ReactComponent as NewsManagerIcon } from './../../assets/grid.svg';
import { ReactComponent as SocialMediaIcon } from './../../assets/chrome.svg';
import { ReactComponent as FeedbackManagerIcon } from './../../assets/pie-chart.svg';
import { ReactComponent as Logo } from './../../assets/JJCLogo.svg';
import { ReactComponent as MenuIcon } from './../../assets/menu.svg';
import { ReactComponent as LogoutIcon } from './../../assets/log-out.svg';

class AdminPanelSideBar extends React.Component {
    render() {
        return (
            <div class="AdminSideBar">
                <ProSidebar>
                    <SidebarHeader className="sideBarHeader">
                         <Logo className="adminSidebarLogo"/>
                         <MenuIcon className="adminSidebarMenuIcon"/>
                    </SidebarHeader>   
                    <SidebarContent>
                        <Menu iconShape="square">
                        <SubMenu icon = {<DashboardIcon/>} title="Dashboard">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        {/* <MenuItem>Dashboard</MenuItem> */}
                        <SubMenu icon = {<UserDashboardIcon/>} title="User Manager">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        
                        <SubMenu icon = {<NewsManagerIcon/>} title="News Manager">
                            <MenuItem>Component 1</MenuItem>
                        </SubMenu>
                        <SubMenu icon = {<FormManagerIcon/>} title="Form Manager">
                            <MenuItem>Component 1</MenuItem>
                        </SubMenu>
                        <SubMenu icon = {<FeedbackManagerIcon/>} title="Feedback Manager">
                            <MenuItem>Component 1</MenuItem>
                        </SubMenu>
                        <SubMenu icon = {<SocialMediaIcon/>} title="Social Media Manager">
                            <MenuItem>Component 1</MenuItem>
                        </SubMenu>
                        <SubMenu icon = {<ForumManagerIcon/>} title="Forum Manager">
                        </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter className="adminSidebarFooter">
                        <LogoutIcon className="adminSidebarLogoutIcon"/> 
                        <span className="adminSidebarLogoutText">Logout</span>
                    </SidebarFooter>
                    
                </ProSidebar>
            </div>
        );
    }
}

export default AdminPanelSideBar;