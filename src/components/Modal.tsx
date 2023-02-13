import Portal from './Portal'

export default function Modal({ visible, onClose, children }) {
    if (!visible) return null
    return (
        <Portal>
            <div className="fixed z-50 inset-0 flex md:items-center justify-center bg-black bg-opacity-80 p-6" onClick={() => onClose()}>
                <div onClick={e => e.stopPropagation()}>{children}</div>
            </div>
        </Portal>
    )
}
