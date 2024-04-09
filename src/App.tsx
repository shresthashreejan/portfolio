const App = () => {
    return (
        <>
            <div className="container p-4">
                <div className="grid-top-container h-1/2 pb-4">
                    <div className="h-full border-2 border-black rounded-xl"></div>
                    <div className="h-full border-2 border-black rounded-xl"></div>
                    <div className="flex flex-col gap-4">
                        <div className="h-full"></div>
                        <div className="h-full border-2 border-black rounded-xl"></div>
                    </div>
                </div>
                <div className="grid-bottom-container h-1/2">
                    <div className="h-full border-2 border-black rounded-xl"></div>
                    <div className="h-full border-2 border-black rounded-xl"></div>
                </div>
            </div>
        </>
    );
};

export default App;
