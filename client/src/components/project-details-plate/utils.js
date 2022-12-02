export const createDetailsItems = (project) => {
  return [
    {
      title: 'Project title',
      content: project.name,
      avatar: project.image
    },
    {
      title: 'Product owner',
      content: project.product_owner,
      avatar: project.product_owner
    },
    {
      title: 'Team',
      content: project.team,
      avatar: project.team_photo
    }
  ]
}