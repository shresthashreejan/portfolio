import Profile from "./components/Profile";
import Introduction from "./components/Introduction";

const App = () => {
    return (
        <>
            <div className="container p-4">
                <div className="grid-top-container h-1/2 pb-4">
                    <div className="flex flex-col h-full gap-4">
                        <div className="h-1/2 border-2 border-black rounded-xl">
                            <Profile />
                        </div>
                        <div className="h-1/2"></div>
                    </div>
                    <div className="h-full border-2 border-black rounded-xl">
                        <Introduction />
                    </div>
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
