import MatrixEffect from "../../components/matrix-effect"

export default function Intro() {
  return (
    <div className="flex justify-center items-center">
      <MatrixEffect />
      <div className="absolute">
        <div className="intro-text my-4">
          <h1 className="text-5xl md:text-7xl my-3 font-Ubuntu block text-center">
            <span className="text-primio">Issam Olwan</span>
          </h1>
          <div className="typewriter">
            <h2 className="text-xl md:text-4xl">Fullstack Software Engineer</h2>
          </div>
        </div>
        <div className="buttons flex flex-col md:flex-row md:gap-1 gap-5 justify-center items-center z-10">
          <button className="btn text-lg bg:black border dark:border-white text-white py-2 px-2 rounded hover:bg-primio hover:border-primio">
            See projects
          </button>
          <button className="btn text-lg flex border dark:border-white text-white rounded py-2 px-2 justify-center items-center hover:bg-primio hover:border-primio">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 17C3.5 16.4477 3.94772 16 4.5 16H16.5C17.0523 16 17.5 16.4477 17.5 17C17.5 17.5523 17.0523 18 16.5 18H4.5C3.94772 18 3.5 17.5523 3.5 17ZM6.79289 9.29289C7.18342 8.90237 7.81658 8.90237 8.20711 9.29289L9.5 10.5858L9.5 3C9.5 2.44772 9.94771 2 10.5 2C11.0523 2 11.5 2.44771 11.5 3L11.5 10.5858L12.7929 9.29289C13.1834 8.90237 13.8166 8.90237 14.2071 9.29289C14.5976 9.68342 14.5976 10.3166 14.2071 10.7071L11.2071 13.7071C11.0196 13.8946 10.7652 14 10.5 14C10.2348 14 9.98043 13.8946 9.79289 13.7071L6.79289 10.7071C6.40237 10.3166 6.40237 9.68342 6.79289 9.29289Z"
                fill="white"
              />
            </svg>
            download CV
          </button>
        </div>
      </div>
    </div>
  )
}
