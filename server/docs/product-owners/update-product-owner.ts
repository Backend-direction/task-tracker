export const updateProductOwner = {
  put:{
      tags:['Product owners'],
      description: "Update product owner",
      operationId: "updateProductOwner",
      parameters:[],
      requestBody: {
          content:{
              'application/json': {
                  schema:{
                      $ref:'#/components/schemas/ProductOwner'
                  }
              }
          }
      },
      responses:{
          '200':{
              description: "Product owner created successfully",
              content:{
                'application/json':{
                  schema:{
                    $ref:'#/components/schemas/ProductOwner'
                  }
                }
              }
          },
          '500':{
              description: 'Server error'
          }
      }
  }
}