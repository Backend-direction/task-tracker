export const createDetailsItems = (project) => {
  return [
    {
      title: 'Project title',
      content: project.name,
      avatar: project.image
    },
    {
      title: 'Product owner',
      content: project.productOwner.user.name + project.productOwner.user.surname,
      avatar: project.productOwner.user.photo
    },
    {
      title: 'Team',
      content: project.team.name,
      avatar: project.team.logo
    }
  ]
}