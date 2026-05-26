import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployees = () => {
  const [inputTextEmployeeError, setInputTextEmployeeError] = useState("");
  const [inputTextEmployeeLoading, setInputTextEmployeeLoading] = useState(false);

  const CreateEmployee = async (payload: string) => {
    try {
      setInputTextEmployeeLoading(true);
      await axiosInstance.post("/employees", {
        name: payload,
      });
    } catch (error) {
      setInputTextEmployeeError("Failed to create employee." + error);
    } finally {
      setInputTextEmployeeLoading(false);
    }
  };
  return {
    CreateEmployee,
    inputTextEmployeeError,
    inputTextEmployeeLoading,
  };
};
