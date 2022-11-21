
import { Router } from "./Router";
import { AccountProvider } from "../context";

export const App = () => {
  return <>
    <AccountProvider>
      <Router/>
    </AccountProvider>
    
  </>;
};