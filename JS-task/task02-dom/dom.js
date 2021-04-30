function changeOuterLinks() {
  const navElement = document.querySelector('#link-list');
  const links = navElement.querySelectorAll('#link-list a');

  links.forEach((linkElement) => {
    if (linkElement.innerHTML.includes('outer-link')) {
      linkElement.setAttribute('target', '_blank');
      const content = linkElement.innerHTML;
      linkElement.innerHTML = `<strong>${content}</strong>`;
    }
  });
  navElement.style.display = 'flex';
  navElement.style.flexDirection = 'column';
  navElement.style.margin = '0px auto';
  navElement.style.width = '30%';
  navElement.style.border = '1px solid blue';
  navElement.style.padding = '16px';
}
  
changeOuterLinks();
  
export { changeOuterLinks };
  