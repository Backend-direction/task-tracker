import { createProject } from "./create-project";
import { getProject } from "./get-project";
import { getProjects } from "./get-projects";

export const projects = {
  '/projects': {
    ...getProjects,
    ...createProject,
  },
  '/project/{id}':  {
    ...getProject
  }
}