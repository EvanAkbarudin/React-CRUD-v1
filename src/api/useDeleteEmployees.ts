import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useDeleteEmployees = () => {
  const [deleteEmployeeLoading, setDeleteEmployeeLoading] = useState(false);
  const [deleteEmployeeError, setDeleteEmployeeError] = useState("");
  const deleteEmployee = async (employeeId: string) => {
    try {
      setDeleteEmployeeLoading(true);
      await axiosInstance.delete(`/employees/${employeeId}`);
    } catch (error) {
      setDeleteEmployeeError("Failed to delete employee." + error);
    } finally {
      setDeleteEmployeeLoading(false);
    }
  };
  return {
    deleteEmployee,
    deleteEmployeeLoading,
    deleteEmployeeError,
  };
};
