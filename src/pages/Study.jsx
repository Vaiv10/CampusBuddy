import { useState } from "react";

export default function Study() {
  const [activeTab, setActiveTab] = useState("notes");
  const [posts, setPosts] = useState([
    { id: 1, title: "How to prepare for AI exam?", likes: 10 },
    { id: 2, title: "Best notes for Data Structures?", likes: 7 },
  ]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() === "") return;
    const newEntry = { id: Date.now(), title: newPost, likes: 0 };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="study-page">
      <h1 className="study-header">📚 Study Section</h1>

      {/* Tabs */}
      <div className="study-tabs">
        <div
          className={`study-tab ${activeTab === "notes" ? "active" : ""}`}
          onClick={() => setActiveTab("notes")}
        >
          Notes & Resources
        </div>
        <div
          className={`study-tab ${activeTab === "community" ? "active" : ""}`}
          onClick={() => setActiveTab("community")}
        >
          Community
        </div>
      </div>

      {/* Notes & Resources */}
      {activeTab === "notes" && (
        <div className="notes-grid">
          <div className="note-card">📘 Notes – B.Tech AI (Semester 3)</div>
          <div className="note-card">🧠 Psychology Notes (PDF)</div>
          <div className="note-card">⚖️ Law Notes (Criminal Justice)</div>
          <div className="note-card">💻 Data Structures Modules</div>
          <div className="note-card">📝 Assignments – AI & ML</div>
          <div className="note-card">📚 Question Papers (All Branches)</div>
        </div>
      )}

      {/* Community Section */}
      {activeTab === "community" && (
        <div className="community">
          <div className="community-input">
            <input
              type="text"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Ask a question..."
            />
            <button onClick={addPost}>Post</button>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <p className="post-text">{post.title}</p>
              <button onClick={() => likePost(post.id)}>👍 {post.likes}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
