export default function TextInput({
    label,
    size = "full",
    value,
    onChange,
    type = "text",
}) {
    const isMultiline = size === "multiline"
    const widthClass = size === "half" ? "w-[47%]" : "w-full"

    const baseClasses = `
        w-full
        rounded-[16px]
        bg-[rgba(61,180,248,0.2)]
        text-white
        px-4
        py-3
        outline-none
        border-none
        font-sans 
    `

    const sizeClasses = isMultiline
        ? "h-40 resize-y"
        : "h-12 resize-none"

    const inputProps = {
        className: `${baseClasses} ${sizeClasses}`,
        value,
        onChange,
    }

    return (
        <div className={`flex flex-col ${widthClass}`}>
            <label className="text-white font-serif text-lg mb-2">
                {label}
            </label>
            {isMultiline ? (
                <textarea {...inputProps} />
            ) : (
                <input type={type} {...inputProps} />
            )}
        </div>
    )
}
