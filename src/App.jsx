import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import HomeFeed from "./pages/HomeFeed";
import Explore from "./pages/Explore";
import Messaging from "./pages/Messaging";
import MyGronetters from "./pages/MyGronetters";
import ProfilePage from "./pages/ProfilePage";
import Settings from "./pages/Settings";

import PopularDiscussions from "./pages/PopularDiscussions";
import ArticleDetail from "./pages/ArticleDetail";
import ComingSoon from "./pages/ComingSoon";
import CreatePost from "./pages/CreatePost";
import CreateDiscussion from "./pages/CreateDiscussion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/gronetters" element={<MyGronetters />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messaging />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/discussions" element={<PopularDiscussions />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-discussion" element={<CreateDiscussion />} />
        <Route path="/article" element={<ArticleDetail />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
