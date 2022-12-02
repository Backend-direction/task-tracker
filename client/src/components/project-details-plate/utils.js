export const createDetailsItems = (project) => {
  return [
    {
      title: 'Project title',
      content: project.name,
      reactFragment: project.image
    },
    {
      title: 'Product owner',
      content: project.product_owner,
      productOwner: project.product_owner
    },
    {
      title: 'Team',
      content: project.team,
      productOwner: project.team_photo
    }
  ]
}