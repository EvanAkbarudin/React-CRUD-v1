import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useCreateEmployees } from "../api/useCreateEmployees";
import { useDeleteEmployees } from "../api/useDeleteEmployees";
import { useEditEmploye } from "../api/useEditEmploye";

const EmployeesPage = () => {
  const [inputText, setInputText] = useState("");
  const [editInputText, setEditInputText] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [editJobInputText, setEditJobInputText] = useState("");

  const { employees, employeesLoading, employeesError, loadEmployees } = useFetchEmployees();
  const { CreateEmployee, inputTextEmployeeLoading, inputTextEmployeeError } = useCreateEmployees();
  const { deleteEmployee } = useDeleteEmployees();
  const { editEmployee, editEmployeeError, editEmployeeLoading } = useEditEmploye();

  const handleCreateEmployee = async () => {
    await CreateEmployee(inputText);
    setInputText("");
    loadEmployees();
  };

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    loadEmployees();
  };

const handleUpdateEmployee = async () => {
  if (!selectedEmployeeId) return;

  if (!editInputText || !editJobInputText) return;

  await editEmployee(selectedEmployeeId, {
    name: editInputText,
    position: editJobInputText,
  });

  await loadEmployees();

  setEditInputText("");
  setSelectedEmployeeId("");
  setEditJobInputText("");
};

  return (
    <div className="bg-gray-900 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Employees</h1>
        <p className="text-gray-400 mb-8">Daftar lengkap karyawan perusahaan</p>

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <button className="mt-4 mb-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400 transition-colors" disabled={employeesLoading} onClick={loadEmployees}>
            Load Employees
          </button>
          {employeesLoading && <p className="text-gray-400 mt-2">Loading...</p>}
          {employeesError && <p className="text-red-500 mt-2">{employeesError}</p>}
          {inputTextEmployeeError && <p className="text-red-500 mt-2">{inputTextEmployeeError}</p>}
          {editEmployeeError && <p className="text-red-500 mt-2">{editEmployeeError}</p>}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Posisi</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Aksi</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 text-gray-300">{employee.id}</td>
                  <td className="px-6 py-4 text-white font-medium">{employee.name}</td>
                  <td className="px-6 py-4 text-gray-400">{employee.position}</td>
                  <td className="px-6 py-4 text-gray-400">{employee.email}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDeleteEmployee(String(employee.id))} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition-colors cursor-pointer">
                      Delete
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="radio"
                      name="selectedEmployee"
                      checked={selectedEmployeeId === String(employee.id)}
                      onChange={() => {
                        setSelectedEmployeeId(String(employee.id));
                        setEditInputText(employee.name || "");
                        setEditJobInputText(employee.position || "");
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder=" Create new employee"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4">
                  <button onClick={handleCreateEmployee} disabled={inputTextEmployeeLoading} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors">
                    Create Employee
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder=" Update employee"
                    value={editInputText}
                    onChange={(e) => setEditInputText(e.target.value)}
                    className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>

                <td className="px-6 py-4">
                  <input
                    type="text"
                    placeholder=" Update job"
                    value={editJobInputText}
                    onChange={(e) => setEditJobInputText(e.target.value)}
                    className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4">
                  <button onClick={handleUpdateEmployee} disabled={editEmployeeLoading && !selectedEmployeeId} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors">
                    Update Employee
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>

          <h1 className="font-bold text-white">{selectedEmployeeId}</h1>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
