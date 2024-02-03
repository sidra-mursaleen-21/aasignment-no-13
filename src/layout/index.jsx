import React from "react";
import { IoMdPeople } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { FaListUl } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { RiSimCardLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="slideBar">
          <h1>sedap.</h1>
          <p>modern admin dashboard</p>
          <ul className="slideMenu">
            <li className="slideLink">
              <IoHomeOutline className="slideIcon" />
              <Link to="">dashboard</Link>
            </li>
            <li className="slideLink">
              <FaListUl className="slideIcon" />
              <Link to="/orderList">order list</Link>
            </li>
            <li className="slideLink">
              <RiSimCardLine className="slideIcon" />
              <Link to="/orderDetail">order detail</Link>
            </li>
            <li className="slideLink">
              <IoMdPeople className="slideIcon" />
              <Link to="/customer">customer</Link>
            </li>
            <li className="slideLink">
              <SiSimpleanalytics className="slideIcon" />
              <Link to="/analytics">analytics</Link>
            </li>
            <li className="slideLink">
              <FaPencilAlt className="slideIcon" />
              <Link to="/reviews">reviews</Link>
            </li>
            <li className="slideLink">
              <RiCupFill className="slideIcon" />
              <Link to="/food">food</Link>
            </li>
            <li className="slideLink">
              <CgDetailsMore className="slideIcon" />
              <Link to="/foodDetail">food detail</Link>
            </li>
            <li className="slideLink">
              <FaUser className="slideIcon" />
              <Link to="/customerDetail">customer detail</Link>
            </li>
            <li className="slideLink">
              <SlCalender className="slideIcon" />
              <Link to="/calender">calender</Link>
            </li>
            <li className="slideLink">
              <IoChatbubbleEllipsesSharp className="slideIcon" />
              <Link to="/chat">chat</Link>
            </li>
            <li className="slideLink">
              <CiWallet className="slideIcon" />
              <Link to="/wallet">wallet</Link>              
            </li>
          </ul>
        </div>
        <div className="pageContent">
          <input placeholder="search here" className="search" type="search" />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
