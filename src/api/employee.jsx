import instance from "./instance";

export const getEmployeeByDate = (date,id)=>{
    return instance.get(`/employees/get-employee-by-date?date=${date}&employee=${id}`)
  }