import {
  ExpandMoreOutlined,
  HistoryOutlined,
  HomeOutlined,
  OndemandVideoOutlined,
  SubscriptionsOutlined,
  ThumbUpAltOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotOutlined,
} from "@material-ui/icons";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeOutlined} title="Home" />
      <SidebarRow Icon={WhatshotOutlined} title="Trending" />
      <SidebarRow Icon={SubscriptionsOutlined} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryOutlined} title="Library" />
      <SidebarRow Icon={HistoryOutlined} title="Subscription" />
      <SidebarRow Icon={OndemandVideoOutlined} title="Your videos" />
      <SidebarRow Icon={WatchLaterOutlined} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
    </div>
  );
};

export default Sidebar;
