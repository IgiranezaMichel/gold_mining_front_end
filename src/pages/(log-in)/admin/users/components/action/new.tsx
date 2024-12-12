export const NewUserAction = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="border border-gray-300 rounded-md p-2"
                />
            </div>
        </div>
    )
}