export const components = {
  components:{
    schemas:{
      id:{
        type:'number',
        description:"An id of a item",
        example: 1
      },
      Project:{
        type:'object',
        properties:{
          id:{
            type:'number',
            description:"Project identification number",
            example: 1
          },
          name:{
            type:'string',
            description:"Project title",
            example:"Test"
          },
          description:{
            type:"string",
            description:"Project description",
            example: "This is a test app"
          },
          image:{
            type:"string",
            description:"Image name",
            example: "1670252221300-contemplative-reptile.jpg"
          },
          rate:{
            type:"number",
            description:"Rating of the project",
            example: 4
          },
          created_at:{
            type:"string",
            description:"Timestamp when project was created",
            example: "2022-12-05T14:57:01.347Z"
          },
          updated_at:{
            type:"string",
            description:"Timestamp when project was updated",
            example: "2022-12-05T14:57:01.347Z"
          },
          productOwnerId:{
            type:"number",
            description:"Product owner id",
            example: 1
          },
          teamId:{
            type:"number",
            description:"Team id",
            example: 3
          }
        }
      },
      ProjectInput:{
        type:'object',
        properties:{
          name:{
            type:'string',
            description:"Project title",
            example:"Test"
          },
          description:{
            type:"string",
            description:"Project description",
            example: "This is a test app"
          },
          projectImage:{
            type:"string",
            description:"Image name",
            example: "1670252221300-contemplative-reptile.jpg"
          },
          product_owner_id:{
            type:"number",
            description:"Product owner id",
            example: 1
          },
          team_id:{
            type:"number",
            description:"Team id",
            example: 3
          }
        }
      },
      ProductOwner: {
        type:'object',
        properties:{
          id:{
            type:'number',
            description:"Product owner identification number",
            example: 1
          },
          capacity:{
            type:'number',
            description:"Product owner capacity",
            example:3
          },
          user:{
            type:"object",
            $ref: '#/components/schemas/User'
          },
        }
      },
      ProductOwnerInput: {
        type:'object',
        properties:{
          capacity:{
            type:'number',
            description:"Product owner capacity",
            example: 3
          },
          userId:{
            type:"number",
            description:"User id",
            example: 3
          },
        }
      },
      User: {
        type:'object',
        properties:{
          id:{
            type:'number',
            description:"User identification number",
            example: 1
          },
          name:{
            type:'string',
            description:"User name",
            example: 'Severus'
          }, 
          surname:{
            type:'string',
            description:"User Snape",
            example: 'Snape'
          }, 
          email:{
            type:'string',
            description:"User email",
            example: 'snape@slutherin.com'
          },  
          status:{
            type:'boolean',
            description:"User status",
            example: 'false'
          },
          created_at:{
            type:"string",
            description:"Timestamp when project was created",
            example: "2022-12-05T14:57:01.347Z"
          },
          updated_at:{
            type:"string",
            description:"Timestamp when project was updated",
            example: "2022-12-05T14:57:01.347Z"
          }, 
          photo:{
            type:"string",
            description:"User photo",
            example: "severus.jpg"
          },
        }
      },
      Error:{
        type:'object',
        properties:{
          message:{
              type:'string'
          },
          internal_code:{
              type:'string'
          }
        }
      }
    }
  }
}