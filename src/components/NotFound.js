import NotFoundImg from "../assets/Images/undraw_page_not_found_re_e9o6.svg"

const NotFound = ({text}) =>{
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] w-full">
        <img
          src={NotFoundImg}
          alt="notFound"
          className="w-[50%] h-[100%] relative"
        />
        <h2 className=" text-center text-4xl  my-10">{text}</h2>
      </div>
    );
}
export default NotFound