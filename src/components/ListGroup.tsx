function ListGroup() {
  const items = ["a", "b", "c", "d", "e"];
  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))} 
      </ul>
    </div>
  );
}
export default ListGroup;
