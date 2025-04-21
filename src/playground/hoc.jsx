// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
};
const AdminInfo = withAdminWarning(Info);

ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminInfo isAdmin={false} info="This is the details" /> );


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAAuthenticated && <p>Please log in to Info</p>}
            {props.isAAuthenticated && <WrappedComponent />}

            {props.isAAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please log in to Info</p>)}
        </div>
    )
};

const AuthInfo = requireAuthentication(Info);
ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthInfo isAAuthenticated={false} info="This is the details" /> );
