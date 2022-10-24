import { ReactNode, useState } from "react";
import { ILukyNavbar } from "./types";





/** # 🚀 Awesome LUKY Navbar 
 * Create an awesome navbar for your apps
 * 
*/
export const LukyAnimatedNavbar = (args:ILukyNavbar)=>{
    const [currentMenu,setCurrentMenu]=useState(0);
    const [openMenu,setOpenMenu]=useState(false);
    
    return (
        <div className={` ${openMenu?'w-50':'w-20'}  relative transition transition-all h-full bg-white rounded-lg p-3 flex flex-col justify-between items-center`}>
          
        <div onClick={()=>setOpenMenu(!openMenu)}  role='button' className={` transition transition-all ${openMenu?'left-45':'left-15'} expander absolute w-8 h-8 bg-white  z-0 rounded-md transform rotate-45 top-50 cursor-pointer text-gray-300 flex flex-row-reverse`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transform -rotate-45">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        
        <div className='absolute z-10 flex flex-col p-4 h-full w-full bg-white'>
            {args.leading}
            <div className='flex flex-col mt-10 pb-10 border-b h-full'>
              <ul className='flex flex-col'>
                {
                  args.menus.map(menu=>{
                    return (
                      <li key={"luky-menu-item-" + menu.index} className='flex w-full mt-4 relative group'>

                          <div className={`${!menu.tooltip && 'hidden'}  ${openMenu?'left-45':'left-16' } shadow-2xl z-20 transform transition scale-0 group-hover:scale-100  -top-[160%]   popover w-40 h-40 bg-gray-800 absolute rounded-md p-5 flex flex-col`}>
                            <div role='button' className='z-10 right-37  expander absolute w-4 h-4 bg-gray-800  z-0 rounded-sm transform -rotate-130 top-[50%] cursor-pointer text-gray-300 flex flex-row-reverse'>
                            </div>

                                <div className={` flex flex-col w-full justify-center text-center`}>
                                   
                                        {menu.tooltip}
                                </div>
                            </div>


                        <a href="#" onClick={()=>{
                            setCurrentMenu(menu.index);
                            menu.onClick&& menu.onClick(menu);
                        }} className={`${(currentMenu == menu.index)?'bg-blue-500 text-white  ':' text-gray-400  ' } ${!openMenu && ' items-center justify-center '}  p-2 rounded-md  w-full flex `}>
                        <div className=''>
                        {menu.icon}
                        </div>
                        <div className={` transition whitespace-nowrap overflow-hidden transition-all transition    ${openMenu?'ml-2 w-auto ':'ml-0 w-0'} `}>
                          {menu.label}
                        </div>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <ul className='flex flex-col items-center w-full py-2'>
                {
                    args.bottomIcons?.map(bottomItem=>(
                        <li className=' my-2'>
                            {bottomItem}
                        </li>
                    ))
                }
              </ul>
            </div>
        </div>
      </div>
    );
}