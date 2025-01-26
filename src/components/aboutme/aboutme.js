import "./aboutme.scss";

const aboutme = () => {
  return (
    <div className="main-aboutme-bg">
      <div className="main-aboutme">
        <h1>About me</h1>
        <div className="main-aboutme-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex
            diam, venenatis vel porta vel, porta eget arcu. Mauris id dapibus
            tellus. Fusce eu sapien quis massa venenatis bibendum. Donec ac
            turpis enim. Aliquam at libero quis dui finibus finibus vitae sit
            amet urna. Mauris in efficitur sem, nec fermentum purus. Donec et
            enim eu quam suscipit gravida. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas id
            leo dapibus, fermentum nisi ac, iaculis magna. Curabitur congue
            laoreet dui, in facilisis dui congue at.
          </p>
          <p>
            Maecenas ut pharetra turpis. Nunc vitae odio ligula. Pellentesque
            consectetur nisl vitae tincidunt ultricies. Sed vel elit ligula.
            Nunc at quam congue, faucibus eros non, mollis mi. Nullam risus
            urna, egestas quis urna id, malesuada lacinia lacus. Nunc aliquam
            nisi interdum sem rhoncus, vel dignissim nisl sagittis. Mauris id
            risus arcu. Etiam quis tempus metus. In sollicitudin nunc id massa
            placerat volutpat. Mauris in tortor a ligula vulputate condimentum
            non nec dolor. In blandit purus quis elit suscipit volutpat. Duis
            non urna at purus semper eleifend eget eu sem. Donec eget risus
            tempor, ullamcorper lectus at, pharetra lorem.
          </p>
        </div>
        <div className="main-aboutme-image">
          <img src="./logo192.png" alt="Igor" />
        </div>
      </div>
    </div>
  );
};

export default aboutme;
