const deleteActiveNav = () => {
  const navList = document.getElementById('vehicleType');
  // navList.classList.add('active')
  navList.classList.remove('active');
};
export default deleteActiveNav;
