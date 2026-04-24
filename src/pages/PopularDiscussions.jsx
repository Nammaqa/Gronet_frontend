import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PopularDiscussions() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/create-post", { replace: true });
  }, [navigate]);
  return null;
}
