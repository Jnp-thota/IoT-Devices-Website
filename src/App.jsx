import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <p>Email: {user.signInDetails?.loginId}</p>
          <button onClick={signOut}>Sign out</button>

          {/* Your app content here */}
          <div>
            <h2>Welcome to your protected app!</h2>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
