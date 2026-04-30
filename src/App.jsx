import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import HomeFeed from "./pages/HomeFeed";
import Explore from "./pages/Explore";
import ProfilePage from "./pages/ProfilePage";
import Settings from "./pages/Settings";
import PopularDiscussions from "./pages/PopularDiscussions";
import ArticleDetail from "./pages/ArticleDetail";
import ComingSoon from "./pages/ComingSoon";
import CreatePost from "./pages/CreatePost";
import CreateDiscussion from "./pages/CreateDiscussion";
import MyGronetters from "./pages/MyGronetters";
import MyGroups from "./pages/MyGroups";
import CreateGroup from "./pages/CreateGroup";
import GroupDetails from "./pages/GroupDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/discussions" element={<PopularDiscussions />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-discussion" element={<CreateDiscussion />} />
        <Route path="/article" element={<ArticleDetail />} />
        <Route path="*" element={<ComingSoon />} />
        <Route path="/my-gronetters" element={<MyGronetters />} />
        <Route path="/groups" element={< MyGroups />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/group-detail" element={<GroupDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
