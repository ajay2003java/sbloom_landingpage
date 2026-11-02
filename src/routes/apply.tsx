import { useEffect } from "react";

export default function Route() {
  useEffect(() => {
    window.location.replace("https://sbloom.ottobon.in/provider");
  }, []);

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
      <p style={{ color: "#785A46" }}>
        Redirecting to Affiliate Provider Portal...{" "}
        <a href="https://sbloom.ottobon.in/provider" style={{ color: "#C9952E", fontWeight: 700 }}>
          Click here if not redirected.
        </a>
      </p>
    </div>
  );
}
