import { useFetch } from "./useFetch";
import { CircularProgress } from "@mui/material";

export function App() {
  const BASE_URL = "https://65313b3f4d4c2e3f333caf85.mockapi.io/api/vi/emp";
  const { data, loading, error } = useFetch(BASE_URL);
  return (
    <>
      {error && <h3>Error!</h3>}
      {!loading ? (
        <table className="table">
          <thead>
            <tr>
              <th className="text-center" scope="col">
                Name
              </th>
              <th className="text-center" scope="col">
                Email
              </th>
              <th className="text-center" scope="col">
                Mobile
              </th>
            </tr>
          </thead>
          {data.map((eachData, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="text-center">{eachData.ename}</td>
                  <td className="text-center">{eachData.email}</td>
                  <td className="text-center">{eachData.emobile}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <CircularProgress />
        </div>
      )}
    </>
  );
}
