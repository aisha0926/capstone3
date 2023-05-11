import React from "react";
import "./Footer.css";

export default function App() {
  return (
    <div className="footer">
      <p className="copy">
        &copy; {new Date().getFullYear()} Copyright: Lutang Group
      </p>
    </div>
  );
}
