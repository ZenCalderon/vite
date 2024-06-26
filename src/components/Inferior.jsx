export default function Inferior(props) {
  return (
    <>
      <div>
        <article className="card">
          <p className="iconContainer">{props.icon}</p>
          <p>{props.title}</p>
          <p>{props.content}</p>
        </article>
      </div>
    </>
  );
}
