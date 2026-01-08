import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className="container"> 
    <Image src="/risd-logo.jpg" alt="RISD Logo" width={200} height={200} />
    <h1>Rescue Initiative for Sustainable Development</h1>
    <p className="subtitle">Building a better future, together.</p>
    <div className="construction-badge">  
      <span className="dot"></span>
      Website Under Construction  
    </div>
  </div>
  <p className="footer">© 2026 RISD. All rights reserved.</p>
  </>
  );
}
