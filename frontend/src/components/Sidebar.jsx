import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";


const Sidebar = () => {
  const [tooltips, setTooltips] = React.useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const toggleTooltip = (button) => {
    setTooltips((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  const navigate = useNavigate();



  const logout = () => {
    localStorage.clear();
    navigate("/");
  };


  return (
    <nav className="bg-gray-900 w-20 h-screen z-10 fixed top-0  justify-between flex flex-col ">
      <div className="mt-10 mb-10">
        <NavLink to={"/dashboard"}>
          <img
            src="https://res-console.cloudinary.com/dus0ln30w/media_explorer_thumbnails/a3fc4eab2fea985b5949566ba87f7d7e/detailed"
            className="rounded-full w-10 h-10 mb-3 mx-auto"
            alt=""
          />
        </NavLink>

        <div className="mt-10">
          <ul>
            <li className="mb-6 flex justify-center">
              <div
                className="tooltip"
                onMouseEnter={() => toggleTooltip("button1")}
                onMouseLeave={() => toggleTooltip("button1")}
              >
                <Button className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-300 mx-auto hover:text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                  </span>
                </Button>
                {tooltips.button1 && (
                  <span className="tooltiptext">Dashboard</span>
                )}
              </div>
            </li>
            <li className="mb-6 flex justify-center">
              <div
                className="tooltip"
                onMouseEnter={() => toggleTooltip("button2")}
                onMouseLeave={() => toggleTooltip("button2")}
              >
                <Button className="p-3">
                  <NavLink to={"/sales"}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-300 mx-auto hover:text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  </NavLink>
                </Button>
                {tooltips.button2 && (
                  <span className="tooltiptext">Button 1 Tooltip</span>
                )}
              </div>
            </li>
            <li className="mb-6 flex justify-center">
              <div
                className="tooltip"
                onMouseEnter={() => toggleTooltip("button3")}
                onMouseLeave={() => toggleTooltip("button3")}
              >
                <Button className="p-3">
                  <span>
                    <svg
                      className="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Button>
                {tooltips.button3 && (
                  <span className="tooltiptext">Button 3 Tooltip</span>
                )}
              </div>
            </li>
            <li className="mb-6 flex justify-center">
              <div
                className="tooltip"
                onMouseEnter={() => toggleTooltip("button4")}
                onMouseLeave={() => toggleTooltip("button4")}
              >
                <Button className="p-3">
                  <span>
                    <svg
                      className="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Button>
                {tooltips.button4 && (
                  <span className="tooltiptext">Button 1 Tooltip</span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
      <Button className="p-3" onClick={logout}>
          <span>
            <svg
              className="fill-current hx-5 w-5 text-gray-300 mx-auto hover:text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                fill="currentColor"
              />
              <path
                d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                fill="currentColor"
              />
            </svg>
          </span>
          </Button>
      </div>
    </nav>
  );
};

export default Sidebar;
