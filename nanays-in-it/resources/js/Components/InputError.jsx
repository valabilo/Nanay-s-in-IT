
export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <div {...props} className={`fs-6 text-warning-emphasis ${className}`}>
            {message}
        </div>
    ) : null;
}
