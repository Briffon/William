function Link(props) {
  return (
    <div className="link-container">
      <a href={props.link}>{props.text}</a>
    </div>
  );
}

export default Link;
