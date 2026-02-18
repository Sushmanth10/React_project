
const PrimaryButton = (props) => {
    // console.log(props);
  return (
    <button type={props.type ==="submit" ? "submit" : "button"} className="bg-linear-to-br from-[#ce212f] to-red-400 px-3 py-2" onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default PrimaryButton;