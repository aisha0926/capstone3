// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div
      className="error_page"
      style={{
        margin: "10%",
      }}
    >
      <img
        src="imgs/Robot_idle_new.webp"
        alt="logo"
        style={{
          width: "10%",
        }}
      />

      <h1>404 Not-Found</h1>

      {/* <Link as={Link} to="/"> */}
      <a href="/" className="text-primary">
        <h5> Go back ... </h5>
      </a>
      {/* <BsFillArrowRightCircleFill size={50} /> */}
      {/* </Link> */}
    </div>
  );
}
