const AuthHeader = () => {
    return (
        <header className = "top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <div className="flex h-16 items-center justify-between px-8 text-[14px] text-slate-700">
                <div className = "flex flex-col">
                    <span className = " text-[10px] font-semibold text-slate-500">
                        WORKSPACE
                    </span>
                    <span className = " text-[20px] font-semibold text-slate-900">
                        {/* This is placeholder text until backend login accounts and database are implemented */}
                        Demo Account    
                    </span>
                </div>
                
                <div className="flex items-center justify-end text-[15px]">
                    <button type="button" className="text-slate-500 transition hover:text-slate-900" >
                        {/* This is placeholder text until appropriate icon is found */}
                        Alerts
                    </button>
                </div>
            </div>
        </header>
  );
};

export default AuthHeader;