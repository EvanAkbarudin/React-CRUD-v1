import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type Employee = {
  id: number;
  name: string;
  position: string;
  email: string;
  salary: string;
};

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeesLoading, setEmployeesLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const loadEmployees = async () => {
    try {
      setEmployeesLoading(true);
      const response = await axiosInstance.get<Employee[]>("/employees");
      setEmployees(response.data);
    } catch (error) {
      setEmployeesError("Gagal memuat data karyawan: " + error);
      setEmployeesLoading(false);
    } finally {
      setEmployeesLoading(false);
    }
  };

  return {
    employees,
    employeesLoading,
    employeesError,
    loadEmployees,
  };
};
