import { NavLink } from "react-router-dom"


function Nav() {


  return (
    <>

      <div className="flex bg-slate-50 overflow-x-auto z-30 justify-evenly sm:text-items-center fixed top-0 left-0 w-screen  h-12">
        <NavLink className="mr-6  mt-2 ml-2  text-2xl text-slate-50 rounded-2xl font-bold bg-red-800 p-2 " to="/">All</NavLink>
        <NavLink className="mr-6 mt-2 text-2xl text-slate-50 rounded-3xl font-bold bg-red-800 p-1 " to="/Entertainment">Entertainment</NavLink>
        <NavLink className="mr-6 mt-2 text-2xl text-slate-50 rounded-3xl font-bold bg-red-800 p-2 " to="/Sports">Sports</NavLink>
        <NavLink className="mr-6 mt-2 text-2xl text-slate-50 rounded-3xl font-bold bg-red-800 p-2 " to="/Technology">Technology</NavLink>
        <NavLink className="mr-6 mt-2 text-2xl text-slate-50 rounded-3xl font-bold bg-red-800 p-2 " to="/Health">Health</NavLink>
      </div>
    </>
  )
}

export default Nav
