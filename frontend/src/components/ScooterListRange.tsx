import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import "./ScooterList.css";

const ScooterList = () => {
  const [scooterList, setScooterData] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["scooterQ", "sc"],
    queryFn: () =>
      fetch(`http://localhost:8080/api/scooters/leaderboard/range`).then(
        (res) => res.json()
      ),
  });

  useEffect(() => {
    if (data) {
      setScooterData(data);
    }
  }, [data]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Top 10 Scooters</h5>
              {isLoading && <p className="text-center">Loading...</p>}
              {error && (
                <p className="text-center text-danger">{error.message}</p>
              )}
              {scooterList && (
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th className="text-right">Real Range (km)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scooterList.map((scooter) => (
                        <tr key={scooter.id}>
                          <td>{scooter.make}</td>
                          <td>{scooter.model}</td>
                          <td className="text-right">
                            {parseFloat(scooter.realRange.toFixed(2))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterList;
