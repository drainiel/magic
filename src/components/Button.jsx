export default function Button({ label, variant = "primary", onClick }) {
    const bgOpacity = variant === "solid" ? "0.8" : "0.2"

    return (
        <button
            onClick={onClick}
            className="w-[250px] rounded-[16px] text-white font-serif text-sm text-center px-4 py-3 outline-none border-none cursor-pointer transition-opacity hover:opacity-80"
            style={{ backgroundColor: `rgba(61, 180, 248, ${bgOpacity})` }}
        >
            {label}
        </button>
    )
}
