

function Buttons({ choice, onClick, className = "" }) {
  return (
    <div className={`Button ${className}`}>
      <button onClick={onClick}>{choice}</button>
    </div>
  );
}
  export default Buttons;
