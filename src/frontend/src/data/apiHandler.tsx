import APIHandler from 'restful-api-handler'
import { endpoints } from './endpoints';

const APIconnection = new APIHandler({baseURL: "http://localhost:5000/api"});

export const apiConnect = async () => {
    await APIconnection.check();
    return APIconnection.isOk;
}
const requestJSON = async (endpoint:any, options?: any) => {
  const response = await APIconnection.requestJSON(endpoint, options);
  return typeof response === "string" ? JSON.parse(response) : response;
};
export const api = endpoints(requestJSON);