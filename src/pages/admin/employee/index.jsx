import React from 'react'
import { Link } from 'react-router-dom'



const ListEmployee = () => {
    return (
        <>
            <div className="w-full px-6 py-6 mx-auto">
                <div>
                    <h1 className="mb-0 font-bold text-white capitalize pb-[20px] text-center text-[50px]">Nhân Viên</h1>
                </div>
                <div className="flex flex-wrap pt-40 -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6 className="dark:text-white">Danh sách nhân viên </h6>
                            </div>
                            <Link className='pl-[1200px]' to={'/admin/employee/add'}>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >
                                Thêm Nhân Viên 
                            </button>
                            </Link>
                            
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">NAME</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">idCard (CMND)</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"> gender</th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">John Michael</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">john@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="  px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="/admin/employee/edit" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user2" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Alexa Liras</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">alexa@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                   
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user3" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Laurent Perrier</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">laurent@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user4" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Michael Levi</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">michael@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user5" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Richard Gran</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">richard@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                  
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user6" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Miriam Eric</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">miriam@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
             
            </div>

        </>
    )
}

export default ListEmployee