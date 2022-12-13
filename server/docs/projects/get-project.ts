export const getProject = {
  get:{
      tags:['Projects'],
      description: "Get a project",
      operationId: "getProject",
      parameters:[
          {
              name:"id",
              in:"path",
              schema:{
                  $ref:"#/components/schemas/id"
              },
              required:true,
              description: "A single project id"
          }
      ],
      responses:{
          '200':{
              description:"Project is obtained",
              content:{
                  'application/json':{
                      schema:{
                          $ref:"#/components/schemas/Project"
                      }
                  }
              }
          },
          '404':{
              description: "Project is not found",
              content:{
                  'application/json':{
                      schema:{
                          $ref:'#/components/schemas/Error',
                          example:{
                              message:"We can't find the project",
                              internal_code:"Invalid id"
                          }
                      }
                  }
              }
          }
      }
  }
}