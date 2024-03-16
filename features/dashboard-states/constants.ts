import { IconType } from "react-icons";
import { GoEye } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuShoppingCart } from "react-icons/lu";

export type DashboardState = {
  id: string;
  title: string;
  value: string;
  icon: IconType;
  progress: "up" | "down";
  progressValue: string;
};

export const dashboardStates: DashboardState[] = [
  {
    id: "1",
    title: "Total Views",
    value: "$3.456K",
    icon: GoEye,
    progress: "up",
    progressValue: "0.73%",
  },
  {
    id: "2",
    title: "Total Profit",
    value: "$45.2K",
    icon: LuShoppingCart,
    progress: "up",
    progressValue: "4.35%",
  },
  {
    id: "3",
    title: "Total Product",
    value: "2.450",
    icon: LiaShoppingBagSolid,
    progress: "up",
    progressValue: "2.59%",
  },
  {
    id: "4",
    title: "Total Users",
    value: "3,456",
    icon: HiOutlineUsers,
    progress: "down",
    progressValue: "0.95%",
  },
];
