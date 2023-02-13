export default function Button({ onClick, children }) {
    return <button className="font-serif text-2xl font-extrabold border-zinc-800 border-4 rounded px-4 py-2" onClick={onClick}>{children}</button>
}