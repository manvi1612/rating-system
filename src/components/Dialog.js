function Dialog(props) {
  return (
    <div className="dialog">
      <div className="dialog-box">
          <img src="https://picryl.com/media/the-forest-at-sunset-unsplash-a0e8ed" alt="dialog"/>
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  );
}
export default Dialog;