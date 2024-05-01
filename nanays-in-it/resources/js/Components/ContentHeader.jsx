export default function ContentHeader({ header, className }) {
    return (
        <>
            <h3 className={`${className} logo-font fw-bold`}>
                {header}
            </h3>
        </>
    )
};