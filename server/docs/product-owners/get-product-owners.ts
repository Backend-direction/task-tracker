export const getProductOwners = {
  get:{
      tags: ['Product owners'],
      description: "Get product owners",
      operationId: 'getProductOwners',
      parameters:[],
      responses:{
        '200':{
          description:"Product owners were obtained",
          content:{
            'application/json':{
              schema:{
                $ref:'#/components/schemas/ProductOwner'
              }
            }
          }
        }
      }
  }
}