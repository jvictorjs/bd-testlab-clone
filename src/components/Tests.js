import { InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle, Check, Search, Timer } from "@material-ui/icons";
import React, { useState } from "react";
import "../styles/Tests.scss";
import { Data } from "./Data";

const Tests = () => {
  const [tests, setTests] = useState(Data);
  const [testsToShow, setTestsToShow] = useState(Data);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCompleted = (testTitle) => {
    tests.filter((t) => t.title === testTitle)[0].isCompleted = true;
    setTests([...tests]);
  };

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      setTestsToShow(tests.filter((t) => t.title.toUpperCase().includes(searchQuery.toUpperCase())));
    } else {
      setTestsToShow([...tests]);
    }
  };

  return (
    <div className="tests-container">
      <div className="search-bar">
        <TextField
          id="tests-search"
          label="Search"
          variant="outlined"
          fullWidth
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment className="search-icon" position="end" onClick={() => handleSearch()}>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {testsToShow.map((test, index) => {
        return (
          <div className="border-card" key={test.title}>
            <div className="left-border">
              <div className={test.isCompleted ? "left-border-completed" : "left-border-start"}></div>
            </div>
            <div className="content">
              <div className="assessment-information">
                <div className="title">{test.title}</div>
                <div className="metadata">
                  <div className="duration">
                    <Timer className="duration-icon" />
                    {test.duration} minutes
                  </div>
                  {test.totalQuestions ? (
                    <div className="total-questions">
                      <div className="indicator"></div>
                      {test.totalQuestions} questions
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div className="action">
                {test.isCompleted ? (
                  <div className="button-completed">
                    <Check className="check-icon" /> Completed
                  </div>
                ) : (
                  <button className="button-start" onClick={() => toggleCompleted(test.title)}>
                    Start
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tests;
