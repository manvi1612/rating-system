function Dialog(props) {
  return (
    <div className="dialog">
      <div className="dialog-box">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="dialog"/>
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  );
}
export default Dialog;