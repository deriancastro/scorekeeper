import './Button.css'

export default function Button({ onClick, children }) {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}
