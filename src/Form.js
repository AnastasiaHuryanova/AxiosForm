import "./styles.css";
export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        title
        <input
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        ></input>
      </label>
      <label>
        body
        <textarea
          value={props.body}
          placeholder="write down your thoughts..."
          onChange={(e) => props.setBody(e.target.value)}
        ></textarea>
      </label>
      <label>
        userId
        <input
          value={props.userId}
          onChange={(e) => props.setUserId(e.target.value)}
        ></input>
      </label>
      <label>
        id
        <input
          value={props.id}
          onChange={(e) => props.setId(e.target.value)}
        ></input>
      </label>
      <button type="submit">upload</button>
      <button type="reset">clear</button>
    </form>
  );
}
