import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="https://www.vectum.co.in/" target="_blank" rel="noreferrer" className="copyright-link">Vectum Technologies</a>
    </div>
  )
}
export default Footer