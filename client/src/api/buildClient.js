import axios from "axios";

export default (params) => {
  if(typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: params.headers,
    });
  } else {
    return axios.create();
  }
}