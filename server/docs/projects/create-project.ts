export const createProject = {
  post:{
      tags:['Projects'],
      description: "Create project",
      operationId: "createProject",
      parameters:[],
      requestBody: {
          content:{
              'application/json': {
                  schema:{
                      $ref:'#/components/schemas/ProjectInput'
                  }
              }
          }
      },
      responses:{
          '201':{
              description: "Project created successfully"
          },
          '500':{
              description: 'Server error'
          }
      }
  }
}