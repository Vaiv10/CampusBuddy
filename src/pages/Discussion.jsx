import { useState, useEffect } from "react";

export default function Discussion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    description: "",
  });

  // ✅ Fetch discussions
  const fetchDiscussions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/discussions");
      const data = await res.json();
      setDiscussions(data);
    } catch (err) {
      console.error("Error fetching discussions:", err);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  // ✅ Add new discussion
  const addDiscussion = async () => {
    if (!newDiscussion.title.trim() || !newDiscussion.description.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDiscussion),
      });

      if (res.ok) {
        setNewDiscussion({ title: "", description: "" });
        fetchDiscussions();
      } else {
        alert("Failed to post discussion");
      }
    } catch (err) {
      console.error("Error posting discussion:", err);
    }
  };

  // ✅ Like button
  const likeDiscussion = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/discussions/${id}/like`, {
        method: "PUT",
      });
      if (res.ok) fetchDiscussions();
    } catch (err) {
      console.error("Error liking discussion:", err);
    }
  };

  const filteredDiscussions = discussions.filter((d) =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="discussion-page">
      <h1>💬 Discussion Forum</h1>

      <div className="discussion-container">
        {/* LEFT SIDE — New Discussion */}
        <div className="left-panel">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="new-discussion">
            <h2>Start a Discussion</h2>
            <input
              type="text"
              placeholder="Title"
              value={newDiscussion.title}
              onChange={(e) =>
                setNewDiscussion({ ...newDiscussion, title: e.target.value })
              }
            />
            <textarea
              placeholder="Write your question or topic..."
              rows="4"
              value={newDiscussion.description}
              onChange={(e) =>
                setNewDiscussion({
                  ...newDiscussion,
                  description: e.target.value,
                })
              }
            />
            <button onClick={addDiscussion}>Post Discussion</button>
          </div>
        </div>

        {/* RIGHT SIDE — Discussions List */}
        <div className="right-panel">
          {filteredDiscussions.length === 0 ? (
            <p className="no-discussions">No discussions yet.</p>
          ) : (
            filteredDiscussions.map((discussion) => (
              <div key={discussion._id} className="discussion-card">
                <h3>{discussion.title}</h3>
                <p>{discussion.description}</p>

                <div className="tags">
                  {discussion.tags?.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="discussion-meta">
                  <button
                    onClick={() => likeDiscussion(discussion._id)}
                    className="like-btn"
                  >
                    👍 {discussion.likes}
                  </button>
                  <span>💭 {discussion.comments} Comments</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
