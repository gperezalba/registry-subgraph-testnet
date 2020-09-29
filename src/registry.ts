import { NewIdentityDD } from "../generated/Registry/Registry";
import { Identity } from "../generated/schema";

export function handleNewIdentityDD(event: NewIdentityDD): void {
    let identity = Identity.load(event.params.identity.toHexString());

    if (identity == null) {
        identity = new Identity(event.params.identity.toHexString());
    }

    identity.identity = event.params.identity;
    identity.hashDD = event.params._dataHashDD;

    identity.save();
}