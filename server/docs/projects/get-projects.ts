export const getProjects = {
  get:{
      tags: ['Projects'],
      description: "Get projects",
      operationId: 'getProjects',
      parameters:[],
      responses:{
          '200':{
              description:"Projects were obtained",
              content:{
                  'application/json':{
                      schema:{
                          $ref:'#/components/schemas/Project'
                      }
                  }
              }
          }
      }
  }
}