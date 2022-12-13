export const createProductOwner = {
  post:{
      tags:['Product owners'],
      description: "Create product owner",
      operationId: "createProductOwner",
      parameters:[],
      requestBody: {
          content:{
              'application/json': {
                  schema:{
                      $ref:'#/components/schemas/ProductOwnerInput'
                  }
              }
          }
      },
      responses:{
          '201':{
              description: "Product owner created successfully"
          },
          '500':{
              description: 'Server error'
          }
      }
  }
}