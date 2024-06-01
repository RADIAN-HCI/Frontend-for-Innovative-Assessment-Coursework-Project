import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.svg";
import "./index.css";
import { useLocation } from "react-router-dom";
import { Image } from "antd";
import Kites from "../images/Kites.svg";
import GeneralList from "./GeneralList.tsx";
import { Button } from "antd";
import BookIcon from "../images/BookIcon.svg";
import ProfileIcon from "../images/ProfileIcon.svg";
import CalendarIcon from "../images/CalendarIcon.svg";
import api from "./api.ts";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import DesignEmptyVector from "../images/DesignEmptyVector.svg";
import "./AssignmentButtonStyle.css";

import { useNavigate } from "react-router-dom";
const Assignments = () => {
  const [courseMenuItems, setCourseMenuItems] = useState([]);

  const [currentCourse, setCurrentCourse] = useState<any>();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    const fetchCourseData = async () => {
      const response = await api.get("api/courses/");
      localStorage.setItem("courses", JSON.stringify(response.data));
      const mapperFunction = (obj) => {
        return { label: obj.name, key: obj.id };
      };
      const courseItemsFromBackend = response.data.map(mapperFunction);
      setCourseMenuItems(courseItemsFromBackend);
    };
    fetchCourseData();

    const fetchAssignmentData = async () => {
      const response = await api.get("api/assignments/");
      localStorage.setItem("assignments", JSON.stringify(response.data));
    };
    fetchAssignmentData();
  }, []);

  const { state } = useLocation();
  const { username } = state;

  const [data, setData] = useState<any[]>([]);
  const handleMenuClick = (e) => {
    const checkAssignments = (item) => {
      if (item?.course === +e.key) {
        return item;
      }
    };

    const filterCourses = (course) => {
      if (course.id === +e.key) {
        localStorage.setItem("course_id", course.id);
        return course;
      }
    };
    setCurrentCourse(
      JSON.parse(localStorage.getItem("courses") || "{}").filter(
        filterCourses
      )[0]
    );

    const allAssignments = JSON.parse(
      localStorage.getItem("assignments") || "{}"
    );

    const result = allAssignments.filter(checkAssignments);
    setData(result);
  };

  const RenderItem = (item, idx) => {
    const navigate = useNavigate();
    return (
      <div
        key={idx}
        style={{
          backgroundColor: "#F5F5F5",
          width: "90%",
          padding: "1%",
        }}
        className="rounded-xl mb-2"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2%",
            marginRight: "2%",
            marginBottom: "5%",
          }}
        >
          <span style={{ fontWeight: "bolder", fontSize: 40 }}>
            {item.title}
          </span>
          <div className="flex flex-row justify-between">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
              }}
            >
              <Image src={BookIcon} width={15} preview={false} />
              <span>Course</span>
              <span>{currentCourse?.name}</span>
            </div>

            <div style={{ width: "30%" }} className="flex flex-col">
              <Image src={ProfileIcon} width={15} preview={false} />
              <span>Owner</span>
              <span>{currentCourse?.professor_name}</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
              }}
            >
              <Image src={CalendarIcon} width={15} preview={false} />
              <span>Deadline</span>
              <span>{item?.deadline}</span>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-1">
            <Button
              className="rounded-xl BtnStyle h-auto items-center justify-center"
              style={{
                color: "#0066CC",
                backgroundColor: "#D6E5F5",
                width: "30%",
                fontWeight: "bolder",
                fontSize: 16,
              }}
              onClick={() => {
                localStorage.setItem("assignment_id", item.id);
                navigate("/brainstorm");
              }}
            >
              Brain Storm
            </Button>
            <Button
              className="rounded-xl BtnStyle h-auto"
              style={{
                backgroundColor: "#DDCDFF",
                color: "#7330FF",
                width: "30%",
                fontWeight: "bolder",
                fontSize: 16,
              }}
              onClick={() => {
                localStorage.setItem("assignment_id", item.id);
                navigate("/design");
              }}
            >
              Design
            </Button>
            <Button
              className="rounded-xl BtnStyle h-auto"
              style={{
                color: "#D32EFF",
                backgroundColor: "#F4C6FF",
                width: "30%",
                fontWeight: "bolder",
                fontSize: 16,
              }}
              onClick={() => {
                localStorage.setItem("assignment_id", item.id);
                navigate("/generate");
              }}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "4%",
      }}
    >
      <Image
        src={Logo}
        preview={false}
        style={{
          marginLeft: "10%",
          marginTop: "5%",
          marginRight: "10%",
          width: "10%",
          height: "10%",
        }}
      />
      <div style={{ width: "22%", alignSelf: "center" }}>
        <Dropdown menu={{ items: courseMenuItems, onClick: handleMenuClick }}>
          <Button>
            <Space>
              Select Your Course to View its Assignments
              <DownOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <span
        style={{
          marginLeft: "10%",
          marginTop: "2%",
          marginRight: "10%",
          fontSize: 24,
        }}
      >
        Welcome <b>{username}</b>, here is your:
      </span>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "2%",
          marginRight: "10%",
        }}
        className="flex flex-row items-center"
      >
        <span
          style={{
            fontWeight: "bolder",
            fontSize: 64,
          }}
        >
          Assignments
        </span>
        <Image
          src={Kites}
          preview={false}
          style={{ marginLeft: "5%", marginTop: "2%", width: "88%" }}
        />
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "3%",
          marginRight: "10%",
        }}
      >
        {data && data.length > 0 ? (
          <GeneralList
            data={data}
            RenderItem={RenderItem}
            numOfColumn={width > 1050 ? 2 : 1}
          />
        ) : (
          <EmptyPage />
        )}
      </div>
    </div>
  );
};

const EmptyPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img alt="background" src={DesignEmptyVector} />
      <span style={{ color: "#676767" }}>
        <b>No Assignment Yet!</b>
      </span>
    </div>
  );
};

export default Assignments;
