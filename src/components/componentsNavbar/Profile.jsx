import imgProfileNavbar from "../../../public/img-profile-admin-navbar.jpg";
const Profile = () => {
  return (
    <div className="profile-component-navbar">
      <img className="img-profile-navbar" src={imgProfileNavbar} alt="" />
      <div className="content-profile-navbar">
        <p className="name-profile-admin-navbar">Sebasstian Ahr</p>
        <p className="admin-profile-navbar">Admin</p>
      </div>
    </div>
  );
};

export default Profile;

/*los estilos de este componente estan en la linea 179 de css*/
