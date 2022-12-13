export const healthCheck = {
  get:{
    tags: ['Health-check'],
    description: "Health check of the server",
    operationId: 'healthCheck',
    parameters:[],
    responses:{
      '200':{
        description:"Server is healthy",
      },
      '500':{
        description:"Server is down",
      }
    }
}
}