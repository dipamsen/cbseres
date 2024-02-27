import { useState } from "react";
import { data } from "./data.js";

function App() {
  const [subject, setSubject] = useState("phy");

  const parsed = (input) => {
    let obj = {};
    if (input.curr) {
      obj["Curriculum (LO + Syllabus + Pattern)"] = input.curr;
    }
    if (input.sqp && input.ms) {
      obj["Sample Question Paper"] = [input.sqp, input.ms];
    }
    if (input.pq && input.pqms) {
      obj["Additional Practice Questions"] = [input.pq, input.pqms];
    }
    if (input.pq2 && input.pq2ms) {
      obj["Additional Practice Questions 2"] = [input.pq2, input.pq2ms];
    }
    if (input.qb) {
      obj["Question Bank"] = input.qb;
    }
    if (input.cfpq) {
      obj["Competency Focused Practice Questions"] = input.cfpq;
    }
    return obj;
  };

  const thisYr = parsed(data[subject].thisyear);
  const pastYr = parsed(data[subject].prevyear);

  const pyqs = data[subject].pyqs;

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CBSE Resources
          </a>
        </div>
      </nav> */}
      <div style={{ height: "50px" }}></div>
      <div className="container-sm" style={{ maxWidth: "700px" }}>
        <h1>CBSE Resources</h1>
        <label className="form-label">
          Subject:
          <select
            value={subject}
            className="form-select"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option value="phy">Physics - 042</option>
            <option value="che">Chemistry - 043</option>
            <option value="mat">Mathematics - 041</option>
            <option value="eng">English (Core) - 301</option>
            <option value="cse">Computer Science - 083</option>
          </select>
        </label>

        <div className="list-group">
          <div className="list-group-item list-group-item-primary">
            <h5 className="text-light strong m-0">Current Year</h5>
          </div>
          {Object.entries(thisYr).map(([item, link], i) => (
            <div
              className="list-group-item"
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>{item} 2023-24</div>
              <div className="btn-group">
                {typeof link == "string" ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                    className="btn btn-primary"
                  >
                    Open
                  </a>
                ) : (
                  typeof link == "object" &&
                  Array.isArray(link) && (
                    <>
                      <a
                        className="btn btn-primary"
                        href={link[0]}
                        target="_blank"
                        rel="noreferrer"
                        key={i}
                      >
                        Question Paper
                      </a>
                      <a
                        className="btn btn-primary"
                        href={link[1]}
                        target="_blank"
                        rel="noreferrer"
                        key={i}
                      >
                        Answers
                      </a>
                    </>
                  )
                )}
              </div>
            </div>
          ))}
          <div
            className="list-group-item list-group-item-primary"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5 className="text-light strong m-0">PYQs (2023)</h5>
            <div>(same syllabus as 2024)</div>
          </div>
          {pyqs.map((item, i) => (
            <div
              className="list-group-item"
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Set {i + 1}</div>
              <div className="btn-group">
                <a
                  href={item.qp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Question Paper
                </a>
                <a
                  href={item.ms}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Answers
                </a>
              </div>
            </div>
          ))}
          <div className="list-group-item list-group-item-primary">
            <h5 className="text-light strong m-0">Previous Year(s)</h5>
          </div>
          {Object.entries(pastYr).map(([item, link], i) => (
            <div
              className="list-group-item"
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                {item == "Question Bank"
                  ? "CBSE Case Based Question Bank"
                  : `${item} 2022-23`}
              </div>
              <div className="btn-group">
                {typeof link == "string" ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                    className="btn btn-primary"
                  >
                    Open
                  </a>
                ) : (
                  typeof link == "object" &&
                  Array.isArray(link) && (
                    <>
                      <a
                        className="btn btn-primary"
                        href={link[0]}
                        target="_blank"
                        rel="noreferrer"
                        key={i}
                      >
                        Question Paper
                      </a>
                      <a
                        className="btn btn-primary"
                        href={link[1]}
                        target="_blank"
                        rel="noreferrer"
                        key={i}
                      >
                        Answers
                      </a>
                    </>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        {/*<p>
          Also check out{" "}
          <a
            href="https://drive.google.com/drive/folders/1t3AI3dGy8-v3H0bxKCH6paSpCYpLGUW9?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            EI Learning Frameworks Class 12
          </a>{" "}
          (with sample assessment items)
        </p>*/}
      </div>
      <div style={{ height: "50px" }}></div>
      {/* footer (created by dipamsen) */}
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted">
            created by{" "}
            <a
              href="https://github.com/dipamsen"
              target="_blank"
              rel="noreferrer"
            >
              dipamsen
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
