import React from "react";

const Endpoint = ({ apiType, route }: any) => (
  <div className="flex w-1/2 items-center justify-start rounded-lg bg-white p-8 shadow">
    <div className="font-bold">{apiType}</div>
    <div> - {route}</div>
  </div>
);

export default Endpoint;
