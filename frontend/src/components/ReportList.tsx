import React from "react";

const ReportList = ({ make, model, reportList, setCurrentScooterInfo }) => {
  return (
    <div className="container w-50">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className=" text-center mb-4">
                <strong>
                  Reports for {make} {model}
                </strong>
              </p>
              {reportList && (
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportList.map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td className="text-right">
                            {parseFloat(user.range.toFixed(2))}
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
      <div className="go-back-btn">
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={() => {
            setCurrentScooterInfo("scooter");
          }}
        >
          back to scooter profile
        </button>
      </div>
    </div>
  );
};

export default ReportList;
