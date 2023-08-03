import { useRezise } from "../../Context/Mobile";
import "./css/manifiest.css";
export default function Error() {
  const device = useRezise();
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h3 className={`text text-${device}`} style={{ color: "#d45656" }}>
        INTERNAL ERRROR
      </h3>
      <h3 className={`text text-${device}`}>
        <span style={{ color: "#d45656" }}>404</span> {`->`} GALLEY NOT FOUND
      </h3>
      <div>
        <div>
          <p className={`text text-${device}`}>
            Please verify :<br></br>
            -The url contains the field{" "}
            <span style={{ color: "#d45656" }}>?id=</span> <br></br>
            -The url contains the symbol{" "}
            <span style={{ color: "#d45656" }}>#</span>
            <br></br>
            -The url <span style={{ color: "#d45656" }}>id</span> is correct{" "}
            <br></br>
            <br></br>
            If the problem persist, contact with us. <br></br>
            <a
              href="https://www.pixiv.net/en/users/86255120 "
              style={{ color: "#d45656" }}
              target="_blank"
            >
              https://www.pixiv.net/en/users/86255120 <br></br>
            </a>
            <span style={{ color: "#9198cd" }}>
              Sorry for the inconvenience...
            </span>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
