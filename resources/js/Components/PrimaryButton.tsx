interface Properties {
    children: React.ReactNode;
    type?: "submit" | "button" | "reset" | undefined;
    processing: boolean;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function PrimaryButton({
    type = "submit",
    className = "",
    processing,
    children,
    onClick,
}: Properties): JSX.Element {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex h-10 items-center rounded-md border border-transparent bg-primary-600 px-5 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-800 active:bg-primary-800 ${
                    processing && "!bg-secondary-200 !text-secondary-500"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
