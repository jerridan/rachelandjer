import React from "react";
import { Dropbox } from "dropbox";

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_ACCESS_TOKEN,
});

export default function App() {
  dbx
    .filesListFolder({ path: "" })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return "Hello, world!";
}
