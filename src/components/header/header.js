import "./header.scss";

const Header = () => {
  return (
    <div className="main-header">
      <div className="main-header-logo">Igor Gruszczyński</div>
      <div className="main-header-list">
        <ul>
          <li>About me</li>
          <li>Projects</li>
          <li>Technology</li>
          <li>Achievements</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
