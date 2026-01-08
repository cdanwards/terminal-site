"use client";

import React, { useState, useEffect } from "react";

const DateCmd: React.FC = () => {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    setDateString(new Date().toString());
  }, []);

  return <p className="font-mono">{dateString}</p>;
};

export default DateCmd;
