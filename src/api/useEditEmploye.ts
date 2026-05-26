import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useEditEmploye = () => {
  const [editEmployeeLoading, setEditEmployeeLoading] = useState(false);
  const [editEmployeeError, setEditEmployeeError] = useState("");

  const editEmployee = async (
    employeeId: string,
    payload: {
      name?: string;
      position?: string;
    },
  ) => {
    try {
      setEditEmployeeLoading(true);

      // PATCH = Mengganti beberapa fields dalam object/data jadi gabisa semua
      // PUT = Mengganti keseluruhan object/data jadi bisa semuanya di ganti
      await axiosInstance.patch(`/employees/${employeeId}`, {
        name: payload.name ? payload.name : undefined,
        position: payload.position ? payload.position : undefined,
      });
    } catch (error) {
      setEditEmployeeError("Failed to edit employee." + error);
    } finally {
      setEditEmployeeLoading(false);
    }
  };
  return {
    editEmployee,
    editEmployeeError,
    editEmployeeLoading,
  };
};
