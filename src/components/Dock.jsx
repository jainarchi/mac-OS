import "./dock.scss";

const Dock = ({ windowState, setWindowState }) => {
    return (
        <>
            <footer className="dock">

                <a href="https://github.com/jainarchi" target="_blank"> 
                <div
                    className="icon github">
                    <img src="doc_icons/github.svg" alt="" />
                </div>
                </a>

                <div
                    onClick={() => { setWindowState(state => ({ ...state, project: !windowState.project })) }}
                    className="icon project">
                    <img src="/doc_icons/github.svg" alt="" />
                </div>

                <div
                    onClick={() => { setWindowState((state) => ({ ...state, notes: !windowState.notes })) }}
                    className="icon note">
                    <img src="/doc_icons/note.svg" alt="" />
                </div>
                <div
                    onClick={() => { setWindowState(state => ({ ...state, resume: !windowState.resume })) }}
                    className="icon pdf">
                    <img src="/doc_icons/pdf.svg" alt="" />
                </div>
                <div className="icon calender">
                    <img src="/doc_icons/calender.svg" alt="" />
                </div>
         {/* email js*/}
                <a href="mailto:archijain9124@gmail.com">
                <div className="icon mail">
                    <img src="/doc_icons/mail.svg" alt="" />
                </div>
                </a>


                <div
                    onClick={() => { setWindowState(state => ({ ...state, socialLinks: !windowState.socialLinks })) }}
                    className="icon link">
                    <img src="/doc_icons/link.svg" alt="" />
                </div>
                <div
                    onClick={() => { setWindowState(state => ({ ...state, cli: !windowState.cli })) }}
                    className="icon cli">
                    <img src="/doc_icons/cli.svg" alt="" />
                </div>

            </footer>
        </>
    );
};

export default Dock;
