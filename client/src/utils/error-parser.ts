import * as R from "ramda";
import { capitalize } from ".";

const ifErrorIncludeReturnMessage = (
  includedMessage: string,
  returnedMessage?: string
) => [
  (error: Error) => Boolean(error.stack?.includes(includedMessage)),
  R.always(capitalize(returnedMessage || includedMessage)),
];

//@ts-expect-error because Ramda types are c***
export const dummyErrorParser = R.cond<Error, string>([
  ifErrorIncludeReturnMessage("invalid address"),
  ifErrorIncludeReturnMessage("invalid signature"),
  ifErrorIncludeReturnMessage("Lock time has not expired"),
  ifErrorIncludeReturnMessage(
    "transfer amount exceeds balance",
    "You do not have the required amount"
  ),
  ifErrorIncludeReturnMessage("vote not currently active", "Vote is closed"),
  ifErrorIncludeReturnMessage(
    "User denied transaction signature",
    "Transaction rejected"
  ),
  ifErrorIncludeReturnMessage(
    "lock time has not expired",
    "Lock time has not expired"
  ),
  ifErrorIncludeReturnMessage("Faucet is dry"),
  [R.T, R.always("Something went wrong, please contact client services")],
]) as (error: Error) => string;
