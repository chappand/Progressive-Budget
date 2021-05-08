const { eventNames } = require("../models/Transaction");

let db;

const request = indexdDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
  };
  
  request.onsuccess = function (event) {
    db = event.target.result;
  
    if (navigator.onLine) {}
  };