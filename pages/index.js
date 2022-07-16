import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFillCaretRightFill,
} from "react-icons/Bs";
import {
  FaLaravel,
  FaReact,
  FaHtml5,
  FaFigma,
  FaGitAlt,
  FaPhp,
} from "react-icons/Fa";
import {
  SiNotion,
  SiJavascript,
  SiTailwindcss,
  SiVisualstudio,
} from "react-icons/Si";

export default function Home() {
  return (
    <div className="">
      <div className="context z-50">
        {/* Content */}
        <div className="px-8 flex h-screen">
          <div className="m-auto">
            <div className="p-8 text-center max-w-screen-sm rounded-lg backdrop-blur-sm bg-white/10 shadow-xl">
              <div className="text-xl md:text-2xl text-white text-center">
                Yusup Supriyadi
              </div>
              <p className="text-gray-400">Web Developer</p>
              <div className="mt-4 grid grid-cols-3 place-items-center gap-3">
                <a
                  className="text-white/40"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://instagram.com/yusufsryd", "_blank");
                  }}
                >
                  <BsInstagram />
                </a>
                <div
                  className="text-white/40"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.linkedin.com/in/yusup-supriyadi-8bb37a187/",
                      "_blank"
                    );
                  }}
                >
                  <BsLinkedin />
                </div>
                <div
                  className="text-white/40"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/yusupsupriyadi", "_blank");
                  }}
                >
                  <BsGithub />
                </div>
              </div>
            </div>
            <div className="mt-2 mx-24 p-4 text-center rounded-full backdrop-blur-xl bg-white/10 shadow-lg">
              <BsFillCaretRightFill className="text-white/70" />
            </div>
          </div>
        </div>
        {/* End Content */}
      </div>
      <div className="area">
        <ul className="circles">
          <li>
            <FaLaravel className="text-7xl text-white/40" />
          </li>
          <li>
            <SiVisualstudio className="text-2xl text-white/40" />
          </li>
          <li>
            <FaPhp className="text-6xl text-white/40" />
          </li>
          <li>
            <FaGitAlt className="text-6xl text-white/40" />
          </li>
          <li>
            <FaHtml5 className="text-4xl text-white/40" />
          </li>
          <li>
            <SiTailwindcss className="text-8xl text-white/30" />
          </li>
          <li>
            <FaReact className="text-9xl text-white/40" />
          </li>
          <li>
            <FaFigma className="text-2xl text-white/40" />
          </li>
          <li>
            <SiNotion className="text-3xl text-white/40" />
          </li>
          <li>
            <SiJavascript className="text-9xl text-white/30 rounded-2xl" />
          </li>
        </ul>
      </div>
    </div>
  );
}
